

/**
 * @brief 实现地球自转
 * @param {Object} viewer Cesium中的viewer
 */
class GlobeRotate {
    constructor(viewer) {
        this.viewer = viewer
    }
    //根据国际天体参考系计算矩阵
    calcMatrix() {
        if (this.viewer.scene.mode !== Cesium.SceneMode.SCENE3D) {
            return ture;
        }
        console.log(this.viewer.camera.position);
        let icrfToFixed = Cesium.Transforms.computeIcrfToFixedMatrix(this.viewer.clock.currentTime);
        if (icrfToFixed) {
            let camera = this.viewer.camera;
            let offset = Cesium.Cartesian3.clone(camera.position);
            let transform = Cesium.Matrix4.fromRotationTranslation(icrfToFixed);
            // 偏移相机，否则会场景旋转而地球不转
            camera.lookAtTransform(transform, offset);
        }
    }
    // 绑定事件
    addEvent() {
        // 转动的速度设置
        this.viewer.clock.multiplier = 2 * 1000;
        // 初始化为单位矩阵
        this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
        this.viewer.scene.postUpdate.addEventListener(this.calcMatrix, this);
    }
    // 解除绑定
    removeEvent() {
        this.viewer.clock.multiplier = 1;
        this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
        this.viewer.scene.postUpdate.removeEventListener(this.calcMatrix, this);
    }
    // 开始旋转
    startRotate() {
        this.viewer.clock.shouldAnimate = true;
        this.removeEvent();
        this.addEvent();
        return this;
    }

    // 停止旋转
    stopRotate() {
        this.removeEvent();
        return this;
    }
}
export default GlobeRotate