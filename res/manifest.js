// 实景模型清单 —— 往 res/ 放入新的 .ply 建模文件后，在此登记即可自动出现在右下角切换栏
// name: 展示名称 | file: 相对 index.html 的路径
// 可选字段: position [x,y,z] / rotation [x,y,z] / scale  number —— 用于多模型对齐摆放
var SPLAT_MANIFEST = [
  { name: '石狮子', file: 'res/lion.ply' },
  // 京东标志：与石狮子同一套世界单位，不需缩放。可见主体（opacity logit>0 的 21510 个点）
  // 中位中心 (-0.15, +0.21, +3.42)，p25..p75 主体尺寸 4.2 x 4.2 x 2.1，就在默认相机正前方。
  // 全点包围盒 24.6 x 63.3 x 40.5 是被低透明度的房间背景长尾撑大的（实景采集常见），
  // 不要按它取景：若缩到能让全包围盒入画的 scale=0.061，主体只剩 0.26 单位、基本看不清。
  // 需要改摆位时直接调下面两个字段：scale（整体缩放）、position（平移）。
  { name: '京东', file: 'res/jd.ply' },
  // { name: '客厅', file: 'res/living_room.ply', position: [0, 0, 4], scale: 1 },
];
