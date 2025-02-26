"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisionCameraProxy = void 0;
exports.runAsync = runAsync;
exports.runAtTargetFps = runAtTargetFps;
var _CameraError = require("./CameraError");
var _NativeCameraModule = require("./NativeCameraModule");
var _JSIHelper = require("./JSIHelper");
let hasWorklets = false;
let isAsyncContextBusy = {
  value: false
};
let runOnAsyncContext = (_frame, _func) => {
  throw new _CameraError.CameraRuntimeError('system/frame-processors-unavailable', 'Frame Processors are not available, react-native-worklets-core is not installed!');
};
try {
  (0, _JSIHelper.assertJSIAvailable)();

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const {
    Worklets
  } = require('react-native-worklets-core');
  isAsyncContextBusy = Worklets.createSharedValue(false);
  const asyncContext = Worklets.createContext('VisionCamera.async');
  runOnAsyncContext = Worklets.createRunInContextFn((frame, func) => {
    'worklet';

    try {
      // Call long-running function
      func();
    } finally {
      // Potentially delete Frame if we were the last ref
      frame.decrementRefCount();
      isAsyncContextBusy.value = false;
    }
  }, asyncContext);
  hasWorklets = true;
} catch (e) {
  // Worklets are not installed, so Frame Processors are disabled.
}
let proxy = {
  getFrameProcessorPlugin: () => {
    throw new _CameraError.CameraRuntimeError('system/frame-processors-unavailable', 'Frame Processors are not enabled!');
  },
  removeFrameProcessor: () => {
    throw new _CameraError.CameraRuntimeError('system/frame-processors-unavailable', 'Frame Processors are not enabled!');
  },
  setFrameProcessor: () => {
    throw new _CameraError.CameraRuntimeError('system/frame-processors-unavailable', 'Frame Processors are not enabled!');
  }
};
if (hasWorklets) {
  // Install native Frame Processor Runtime Manager
  const result = _NativeCameraModule.CameraModule.installFrameProcessorBindings();
  if (result !== true) throw new _CameraError.CameraRuntimeError('system/frame-processors-unavailable', 'Failed to install Frame Processor JSI bindings!');

  // @ts-expect-error global is untyped, it's a C++ host-object
  proxy = global.VisionCameraProxy;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (proxy == null) {
    throw new _CameraError.CameraRuntimeError('system/frame-processors-unavailable', 'Failed to install VisionCameraProxy. Are Frame Processors properly enabled?');
  }
}
const VisionCameraProxy = proxy;
exports.VisionCameraProxy = VisionCameraProxy;
function getLastFrameProcessorCall(frameProcessorFuncId) {
  'worklet';

  var _global$__frameProces;
  return ((_global$__frameProces = global.__frameProcessorRunAtTargetFpsMap) === null || _global$__frameProces === void 0 ? void 0 : _global$__frameProces[frameProcessorFuncId]) ?? 0;
}
function setLastFrameProcessorCall(frameProcessorFuncId, value) {
  'worklet';

  if (global.__frameProcessorRunAtTargetFpsMap == null) global.__frameProcessorRunAtTargetFpsMap = {};
  global.__frameProcessorRunAtTargetFpsMap[frameProcessorFuncId] = value;
}

/**
 * Runs the given function at the given target FPS rate.
 *
 * For example, if you want to run a heavy face detection algorithm
 * only once per second, you can use `runAtTargetFps(1, ...)` to
 * throttle it to 1 FPS.
 *
 * @param fps The target FPS rate at which the given function should be executed
 * @param func The function to execute.
 * @returns The result of the function if it was executed, or `undefined` otherwise.
 * @example
 *
 * ```ts
 * const frameProcessor = useFrameProcessor((frame) => {
 *   'worklet'
 *   console.log('New Frame')
 *   runAtTargetFps(5, () => {
 *     'worklet'
 *     const faces = detectFaces(frame)
 *     console.log(`Detected a new face: ${faces[0]}`)
 *   })
 * })
 * ```
 */
function runAtTargetFps(fps, func) {
  'worklet';

  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const funcId = func.__workletHash ?? '1';
  const targetIntervalMs = 1000 / fps; // <-- 60 FPS => 16,6667ms interval
  const now = performance.now();
  const diffToLastCall = now - getLastFrameProcessorCall(funcId);
  if (diffToLastCall >= targetIntervalMs) {
    setLastFrameProcessorCall(funcId, now);
    // Last Frame Processor call is already so long ago that we want to make a new call
    return func();
  }
  return undefined;
}

/**
 * Runs the given function asynchronously, while keeping a strong reference to the Frame.
 *
 * For example, if you want to run a heavy face detection algorithm
 * while still drawing to the screen at 60 FPS, you can use `runAsync(...)`
 * to offload the face detection algorithm to a separate thread.
 *
 * @param frame The current Frame of the Frame Processor.
 * @param func The function to execute.
 * @example
 *
 * ```ts
 * const frameProcessor = useFrameProcessor((frame) => {
 *   'worklet'
 *   console.log('New Frame')
 *   runAsync(frame, () => {
 *     'worklet'
 *     const faces = detectFaces(frame)
 *     const face = [faces0]
 *     console.log(`Detected a new face: ${face}`)
 *   })
 * })
 * ```
 */
function runAsync(frame, func) {
  'worklet';

  if (isAsyncContextBusy.value) {
    // async context is currently busy, we cannot schedule new work in time.
    // drop this frame/runAsync call.
    return;
  }

  // Increment ref count by one
  frame.incrementRefCount();
  isAsyncContextBusy.value = true;

  // Call in separate background context
  runOnAsyncContext(frame, func);
}
//# sourceMappingURL=FrameProcessorPlugins.js.map