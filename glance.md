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

### `stagger` 属性详解

`stagger` 属性用于创建序列动画，当你的选择器匹配多个元素时特别有用。它可以让每个元素的动画按照一定的时间间隔依次开始，而不是同时开始。

#### 基本用法

```js
// 简单数值：每个元素间隔0.2秒开始动画
gsap.to(".box", {
	y: 100,
	opacity: 1,
	stagger: 0.2,
});
```

#### 高级配置

```js
gsap.to(".box", {
	y: 100,
	opacity: 1,
	stagger: {
		amount: 1, // 所有元素的动画在1秒内开始（总间隔时间）
		from: "center", // 从中间元素开始向两边扩散
		grid: [3, 5], // 网格布局 [列, 行]
		ease: "power2.inOut", // 错开时间的缓动函数
		each: 0.1, // 每个元素之间的固定间隔时间
	},
});
```

#### `stagger` 配置选项

-   **数值**：简单设置每个元素之间的间隔时间（秒）
-   **对象**配置：
    -   `amount`: 所有元素完成错开所需的总时间
    -   `from`: 动画开始的位置/索引
        -   数值：特定索引
        -   `"start"`/`"center"`/`"end"`: 从开始/中间/结尾
        -   `"edges"`: 从两端向中间
        -   `[x, y]`: 从特定坐标开始（需配合`grid`使用）
    -   `grid`: 将元素视为网格布局 `[列数, 行数]`
    -   `axis`: 与`grid`配合使用，设置错开方向 (`"x"` 或 `"y"`)
    -   `ease`: 应用于错开时间的缓动函数
    -   `each`: 每个元素之间的固定间隔时间（优先于`amount`）

## 动画控制（Controls）

GSAP 动画默认会在创建后立即自动播放。如果你需要手动控制动画的播放，可以使用以下方法。

### 创建暂停的动画

要创建一个初始状态为暂停的动画，可以在配置中添加 `paused: true`：

```js
gsap.to(".box", {
	x: 200,
	duration: 1,
	paused: true, // 动画创建后不会自动播放
});
```

### 常用控制方法

一旦你创建了一个动画实例，你可以使用以下方法来控制它：

```js
const tween = gsap.to(".box", { x: 200, duration: 2 });

// 播放控制
tween.play(); // 播放
tween.pause(); // 暂停
tween.reverse(); // 反向播放
tween.restart(); // 重新开始动画

// 跳转控制
tween.seek(1); // 跳转到动画的1秒位置
tween.progress(0.5); // 跳转到动画的50%进度位置
tween.time(0.8); // 设置动画的当前时间为0.8秒

// 速度控制
tween.timeScale(2); // 以2倍速播放
tween.timeScale(0.5); // 以0.5倍速(慢速)播放
```

### 动画事件回调

你可以在动画的不同阶段添加回调函数：

```js
gsap.to(".box", {
	x: 200,
	duration: 1,
	onStart: () => console.log("动画开始"),
	onUpdate: () => console.log("动画更新中"),
	onComplete: () => console.log("动画完成"),
	onRepeat: () => console.log("动画重复"),
	onReverseComplete: () => console.log("反向动画完成"),
});
```

### 获取/设置动画状态

```js
// 检查动画状态
console.log(tween.isActive()); // 是否正在播放
console.log(tween.progress()); // 获取当前进度(0-1)
console.log(tween.time()); // 获取当前时间位置

// 修改动画属性
tween.duration(3); // 修改动画时长
tween.vars.x = 300; // 修改目标值
tween.invalidate(); // 使修改生效
tween.restart(); // 重新开始应用新设置
```
