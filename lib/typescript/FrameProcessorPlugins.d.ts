import type { Frame } from './Frame';
import type { FrameProcessor } from './CameraProps';
type BasicParameterType = string | number | boolean | undefined;
type ParameterType = BasicParameterType | BasicParameterType[] | Record<string, BasicParameterType | undefined>;
interface FrameProcessorPlugin {
    /**
     * Call the native Frame Processor Plugin with the given Frame and options.
     * @param frame The Frame from the Frame Processor.
     * @param options (optional) Additional options. Options will be converted to a native dictionary
     * @returns (optional) A value returned from the native Frame Processor Plugin (or undefined)
     */
    call: (frame: Frame, options?: Record<string, ParameterType>) => ParameterType;
}
interface TVisionCameraProxy {
    setFrameProcessor: (viewTag: number, frameProcessor: FrameProcessor) => void;
    removeFrameProcessor: (viewTag: number) => void;
    /**
     * Creates a new instance of a Frame Processor Plugin.
     * The Plugin has to be registered on the native side, otherwise this returns `undefined`
     */
    getFrameProcessorPlugin: (name: string) => FrameProcessorPlugin | undefined;
}
export declare const VisionCameraProxy: TVisionCameraProxy;
declare global {
    var __frameProcessorRunAtTargetFpsMap: Record<string, number | undefined> | undefined;
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
export declare function runAtTargetFps<T>(fps: number, func: () => T): T | undefined;
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
export declare function runAsync(frame: Frame, func: () => void): void;
export {};
//# sourceMappingURL=FrameProcessorPlugins.d.ts.map