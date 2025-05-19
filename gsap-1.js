gsap.to("h1", {
	x: 400,
});

// gsap默认使用500ms，可以通过defaults更改默认值
gsap.defaults({
	duration: 0.5,
});

gsap.to(".fred", {
	x: 400,
	y: 300,
	scale: 2,
	rotation: 360,
	duration: 3,
});

// 设置起点，会从这个起点动效到初始位置
gsap.from(".fred2", {
	x: 400,
	y: 300,
	scale: 2,
	rotation: 360,
	duration: 3,
});

// 设置起点终点
gsap.fromTo(
	".fred3",
	{
		x: 400,
	},
	{
		opacity: 1,
		x: 0,
		stagger: 2,
		ease: "bounce.out",
		repeat: -1,
		delay: 1,
		yoyo: true,
	}
);

// stagger - 所有选中的元素一次执行动画
gsap.to(".fred-stagger-edges", {
	stagger: {
		each: 0.3, // 每个元素执行动画前的间隔
		// amount: 2, // 整体执行时间为2秒，比如有5个元素，amount为2时，开始到结束花费2秒，每个元素执行动画的时间为2/5=0.4秒
		from: "edges", // "start" "center" "end" "edges" 开始的位置，center从中间向两边扩散, edges从两边向中间扩散
	},
	y: -100,
	repeat: -1,
	delay: 1,
});
gsap.to(".fred-stagger-center", {
	stagger: {
		each: 0.3, // 每个元素执行动画前的间隔
		// amount: 2, // 整体执行时间为2秒，比如有5个元素，amount为2时，开始到结束花费2秒，每个元素执行动画的时间为2/5=0.4秒
		from: "center", // "start" "center" "end" "edges" 开始的位置，center从中间向两边扩散, edges从两边向中间扩散
	},
	y: 100,
	repeat: -1,
	delay: 1,
});

// 获取回调信息显示元素
const callbackInfo = document.querySelector('.callback-info');

// 显示回调信息的函数
function showCallbackInfo(message) {
	callbackInfo.textContent = message;

	// 2秒后清除消息
	setTimeout(() => {
		if (callbackInfo.textContent === message) {
			callbackInfo.textContent = '';
		}
	}, 2000);
}

// 创建带有回调的动画
const fredAnimation = gsap.to(".controlled-fred", {
	x: 500,
	rotation: 360,
	duration: 3,
	ease: "power1.inOut",
	paused: true,
	repeat: 2,
	yoyo: true,
	onStart: () => showCallbackInfo("动画开始"),
	onUpdate: () => {
		// 只在整数百分比变化时更新，避免过多更新
		const progress = Math.round(fredAnimation.progress() * 100);
		if (progress % 10 === 0) {
			showCallbackInfo(`动画更新中: ${progress}%`);
		}
	},
	onComplete: () => showCallbackInfo("动画完成"),
	onRepeat: () => showCallbackInfo("动画重复"),
	onReverseComplete: () => showCallbackInfo("反向动画完成"),
});

// 原有的控制按钮
document.getElementById("play-btn").addEventListener("click", () => {
	fredAnimation.play();
});

document.getElementById("pause-btn").addEventListener("click", () => {
	fredAnimation.pause();
});

document.getElementById("reverse-btn").addEventListener("click", () => {
	fredAnimation.reverse();
});

document.getElementById("restart-btn").addEventListener("click", () => {
	fredAnimation.restart();
});

// 新增的控制按钮
document.getElementById("seek-50-btn").addEventListener("click", () => {
	fredAnimation.seek(1.5); // 跳转到动画的1.5秒位置 (总时长3秒的50%)
	showCallbackInfo("跳转到 1.5s (50%)");
});

document.getElementById("progress-75-btn").addEventListener("click", () => {
	fredAnimation.progress(0.75); // 跳转到动画的75%进度位置
	showCallbackInfo("跳转到 75% 进度");
});

document.getElementById("time-1-btn").addEventListener("click", () => {
	fredAnimation.time(1); // 设置动画的当前时间为1秒
	showCallbackInfo("设置时间为 1s");
});

document.getElementById("speed-2x-btn").addEventListener("click", () => {
	fredAnimation.timeScale(2); // 以2倍速播放
	showCallbackInfo("播放速度: 2x");
});

document.getElementById("speed-half-btn").addEventListener("click", () => {
	fredAnimation.timeScale(0.5); // 以0.5倍速(慢速)播放
	showCallbackInfo("播放速度: 0.5x");
});

document.getElementById("speed-normal-btn").addEventListener("click", () => {
	fredAnimation.timeScale(1); // 恢复正常速度
	showCallbackInfo("播放速度: 1x (正常)");
});

// Timeline
// 连续调用
gsap.timeline().to(".fred-timeline-a", {
	x: 400,
	duration: 3,
}).to(".fred-timeline-b", {
	x: 400,
	duration: 2,
	ease: "back"
}).to(".fred-timeline-c", {
	xPercent: 100,
	duration: 1
});





