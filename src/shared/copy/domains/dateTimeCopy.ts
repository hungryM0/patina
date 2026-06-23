const ZH_CN_DATE_TIME_COPY = {
  date: {
    today: "今天",
    yesterday: "昨天",
    pickDate: "选择日期",
    weekdaysShort: ["一", "二", "三", "四", "五", "六", "日"],
    heatmapWeekdays: ["一", "", "三", "", "五", "", "日"],
    monthLabel: (month: number) => `${month}月`,
    yearMonthLabel: (year: number, month: number) => `${year} 年 ${month} 月`,
  },
  time: {
    pickTime: "选择时间",
    hours: "小时",
    minutes: "分钟",
  },
};

const EN_US_DATE_TIME_COPY = {
  date: {
    today: "Today",
    yesterday: "Yesterday",
    pickDate: "Select date",
    weekdaysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    heatmapWeekdays: ["Mon", "", "Wed", "", "Fri", "", "Sun"],
    monthLabel: (month: number) => new Date(2020, month - 1, 1).toLocaleString("en-US", { month: "short" }),
    yearMonthLabel: (year: number, month: number) => `${new Date(year, month - 1, 1).toLocaleString("en-US", { month: "long" })} ${year}`,
  },
  time: {
    pickTime: "Select time",
    hours: "Hour",
    minutes: "Minute",
  },
};

export const dateTimeCopy = {
  "zh-CN": ZH_CN_DATE_TIME_COPY,
  "en-US": EN_US_DATE_TIME_COPY,
} as const;
