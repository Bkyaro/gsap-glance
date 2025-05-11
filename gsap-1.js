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

