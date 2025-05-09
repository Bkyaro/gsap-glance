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
