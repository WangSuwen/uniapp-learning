"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [1, 2, 3, 4]
    };
  }
};
if (!Array) {
  const _component_z_swiper_item = common_vendor.resolveComponent("z-swiper-item");
  const _component_z_swiper = common_vendor.resolveComponent("z-swiper");
  (_component_z_swiper_item + _component_z_swiper)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: "4ae1baca-1-" + i0 + ",4ae1baca-0"
      };
    }),
    b: common_vendor.o(($event) => $data.list = $event),
    c: common_vendor.p({
      modelValue: $data.list
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/wxq/learning/uniapp-learning/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
