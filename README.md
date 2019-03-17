# periodicaTestAssignment

### **Дано**

На входе есть SVG разметка:

```
<svg width="584" height="584" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewport-fill="white">

<defs>
  <clipPath id="image-clip-path">
    <rect x="178" y="178" width="228" height="228"/>
  </clipPath>
</defs>
  
<image id="image" x="178" y="178" width="228" height="228" xlink:href="https://static.periodica.press/public/photo_dpi72.jpg" preserveAspectRatio="xMidYMid slice"/>

</svg>
```

### Требуется

Разработать страницу на которой отображается SVG разметка и есть:
1. поле ввода для URL на фотографию, которую требуется отобразить в разметке
кнопка ОК.
2. Вводим ссылку на фотографию, жмем ОК – фото должно отобразиться в SVG разметке.
3. Если заданное по ссылке фото не квадратное, то нужно его вписать в квадрат, так, чтобы оно занимало все пространство.
4. Можно курсором мыши позиционировать изображение в квадрате (но нельзя, чтобы изображение выходило за рамки квадрата).
5. Добавить поле ввода “масштаб”, которое позволит увеличить фотографию (масштаб может быть от 100% - исходные размеры (см шаг 3) до 300% - трехкратное увеличение.

**как это может выглядеть:** 
https://www.dropbox.com/s/hzcwr8qi7qd1wjc/test-case-sample.mov?dl=0 

**изменение масштаба:** 
https://www.dropbox.com/s/9no5zn51yacssob/zooming.mov?dl=0 

