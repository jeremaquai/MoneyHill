import appStateReducer, {
    setWindowWidth,
    setWindowHeight,
    setMobileTrue,
    setMobileFalse
} from './appSlice';

describe('appState Reducer', () => {
    const webState = {
        windowWidth: 1200,
        windowHeight: 600,
        mobileLayout: false,
    };

    const mobileState = {
        windowWidth: 600,
        windowHeight: 1200,
        mobileLayout: true,
    };

    it('should handle initial state', () => {
        expect(appStateReducer(undefined, { type: 'unknown' })).toEqual({
            windowWidth: 900,
            windowHeight: 500,
            mobileLayout: false,
        });
    });

    it('should handle the mobile state defined above', () => {
        expect(appStateReducer(mobileState, { type: 'unknown' })).toEqual({
            windowWidth: 600,
            windowHeight: 1200,
            mobileLayout: true,
        });
    });

    it('should handle window width changes and automatically change the mobileLayout ', () => {
        const testOne = appStateReducer(webState, setWindowHeight(1300));
        const testTwo = appStateReducer(mobileState, setWindowWidth(1301));

        expect(testOne.windowHeight).toEqual(1300);
        expect(testOne.mobileLayout).toBe(true);
        expect(testTwo.windowWidth).toBe(1301);
        expect(testTwo.mobileLayout).toBe(false);
    });

    it('should handle setMobileTrue and setMobileFalse', () => {
        const testOne = appStateReducer(webState, setMobileTrue());
        const testTwo = appStateReducer(mobileState, setMobileFalse());

        expect(testOne.mobileLayout).toBe(true);
        expect(testTwo.mobileLayout).toBe(false);
    });
});