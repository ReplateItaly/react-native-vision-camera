"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFrameProcessor = createFrameProcessor;
exports.useFrameProcessor = useFrameProcessor;
var _react = require("react");
/**
 * Create a new Frame Processor function which you can pass to the `<Camera>`.
 * (See ["Frame Processors"](https://mrousavy.github.io/react-native-vision-camera/docs/guides/frame-processors))
 *
 * Make sure to add the `'worklet'` directive to the top of the Frame Processor function, otherwise it will not get compiled into a worklet.
 *
 * Also make sure to memoize the returned object, so that the Camera doesn't reset the Frame Processor Context each time.
 */
function createFrameProcessor(frameProcessor, type) {
  return {
    frameProcessor: frame => {
      'worklet';

      // Increment ref-count by one
      frame.incrementRefCount();
      try {
        // Call sync frame processor
        frameProcessor(frame);
      } finally {
        // Potentially delete Frame if we were the last ref (no runAsync)
        frame.decrementRefCount();
      }
    },
    type: type
  };
}

/**
 * Returns a memoized Frame Processor function wich you can pass to the `<Camera>`.
 * (See ["Frame Processors"](https://mrousavy.github.io/react-native-vision-camera/docs/guides/frame-processors))
 *
 * Make sure to add the `'worklet'` directive to the top of the Frame Processor function, otherwise it will not get compiled into a worklet.
 *
 * @param frameProcessor The Frame Processor
 * @param dependencies The React dependencies which will be copied into the VisionCamera JS-Runtime.
 * @returns The memoized Frame Processor.
 * @example
 * ```ts
 * const frameProcessor = useFrameProcessor((frame) => {
 *   'worklet'
 *   const qrCodes = scanQRCodes(frame)
 *   console.log(`QR Codes: ${qrCodes}`)
 * }, [])
 * ```
 */
function useFrameProcessor(frameProcessor, dependencies) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (0, _react.useMemo)(() => createFrameProcessor(frameProcessor, 'frame-processor'), dependencies);
}
//# sourceMappingURL=useFrameProcessor.js.map