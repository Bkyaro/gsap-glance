# GSAP Speed Run

## 基础动画（Tween）

### 食用姿势

```js
gsap.to(element, {
	x: 400,
	duration: 3,
});
```

### 金牌解说员

-   **选择器**：`element` 用于选择目标元素
-   **动画时长**：
    -   默认动画时长为 500ms
    -   可以通过以下方式修改默认时长：
        ```js
        gsap.config({
        	defaults: { duration: 3 },
        });
        ```
-   **CSS 属性命名**：
    -   CSS 中带连字符的属性需要使用驼峰命名法
    -   例如：`border-radius` → `borderRadius`
-   **位置属性**：
    -   使用 `top`、`left` 等位置属性时，目标元素需要设置定位：
        -   `position: relative`
        -   `position: fixed`
        -   `position: absolute`

### `gsap.from()` - 从指定状态到当前状态

`gsap.from()` 允许你定义动画的起始状态，GSAP 将会从这个你定义的起始状态动画到元素在 CSS 中定义的或者自然的当前状态。

#### 食用姿势

```js
gsap.from(".selector", {
	x: 400, // 从 x: 400 的位置开始
	y: 300, // 从 y: 300 的位置开始
	scale: 2, // 从放大2倍的状态开始
	rotation: 360, // 从旋转360度的状态开始
	duration: 3, // 动画持续3秒
});
```

### `gsap.fromTo()` - 从指定状态到指定状态

`gsap.fromTo()` 提供了最精细的控制，允许你明确定义动画的起始状态和结束状态。

#### 食用姿势

```js
gsap.fromTo(
	".selector",
	{
		// 起始状态
		x: 400,
		opacity: 0,
	},
	{
		// 结束状态
		x: 0,
		opacity: 1,
		duration: 2,
		ease: "linear", // 缓动函数
		repeat: -1, //无限重复
		yoyo: true, // 开启往返动画
	}
);
```

### 其他常用属性

-   `ease`: 定义动画的缓动效果（例如: `"power2.inOut"`, `"bounce.out"`, `"linear"`）。
-   `repeat`: 动画重复的次数。`-1` 表示无限循环。
-   `yoyo`: 如果设置为 `true`，动画会在每次重复时反向播放，产生来回效果。需要 `repeat` 属性配合。
-   `delay`: 动画开始前的延迟时间（秒）。
-   `stagger`: 如果选择器匹配多个元素，`stagger` 可以让它们错开时间开始动画。
