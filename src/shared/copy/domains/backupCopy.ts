const ZH_CN_BACKUP_COPY = {
  backup: {
    versionLabel: (version: number) => `备份版本：v${version}`,
    schemaLabel: (schemaVersion: number) => `Schema ${schemaVersion}`,
    exportedAt: (value: string) => `导出时间：${value}`,
    appVersion: (version: string) => `应用版本：${version}`,
    restoreSafety: (message: string) => `恢复提示：${message}`,
    itemCounts: (sessionCount: number, settingCount: number, iconCacheCount: number) => (
      `会话数：${sessionCount}，设置项：${settingCount}，图标缓存：${iconCacheCount}`
    ),
  },
};

const EN_US_BACKUP_COPY = {
  backup: {
    versionLabel: (version: number) => `Backup version: v${version}`,
    schemaLabel: (schemaVersion: number) => `Schema ${schemaVersion}`,
    exportedAt: (value: string) => `Exported at: ${value}`,
    appVersion: (version: string) => `App version: ${version}`,
    restoreSafety: (message: string) => `Restore status: ${message}`,
    itemCounts: (sessionCount: number, settingCount: number, iconCacheCount: number) => (
      `Sessions: ${sessionCount}, settings: ${settingCount}, cached icons: ${iconCacheCount}`
    ),
  },
};

export const backupCopy = {
  "zh-CN": ZH_CN_BACKUP_COPY,
  "en-US": EN_US_BACKUP_COPY,
} as const;
