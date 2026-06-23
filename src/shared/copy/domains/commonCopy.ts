const ZH_CN_COMMON_COPY = {
  common: {
    confirm: "确认",
    cancel: "取消",
    close: "关闭",
    save: "保存",
    saving: "正在保存...",
    saved: "已保存",
    loading: "加载中...",
    processing: "处理中...",
    default: "默认",
    showPassword: "显示密码",
    hidePassword: "隐藏密码",
  },
};

const EN_US_COMMON_COPY = {
  common: {
    ...ZH_CN_COMMON_COPY.common,
    confirm: "Confirm",
    cancel: "Cancel",
    close: "Close",
    save: "Save",
    saving: "Saving...",
    saved: "Saved",
    loading: "Loading...",
    processing: "Processing...",
    default: "Default",
    showPassword: "Show password",
    hidePassword: "Hide password",
  },
};

export const commonCopy = {
  "zh-CN": ZH_CN_COMMON_COPY,
  "en-US": EN_US_COMMON_COPY,
} as const;
