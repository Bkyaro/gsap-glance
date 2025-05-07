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
