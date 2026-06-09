import { Heart, X } from "lucide-react";
import wechatRewardDarkUrl from "../assets/wechat-reward-dark.png";
import wechatRewardLightUrl from "../assets/wechat-reward-light.png";
import kofiButtonUrl from "../assets/kofi-button.png";
import QuietDialog from "../../../shared/components/QuietDialog";
import { UI_TEXT } from "../../../shared/copy/uiText.ts";

interface AboutSupportDialogProps {
  open: boolean;
  onClose: () => void;
  onOpenKofi: () => void;
}

export default function AboutSupportDialog({
  open,
  onClose,
  onOpenKofi,
}: AboutSupportDialogProps) {
  return (
    <QuietDialog
      open={open}
      title={UI_TEXT.about.supportDialogTitle}
      description={UI_TEXT.about.supportDialogDescription}
      onClose={onClose}
      surfaceClassName="about-support-dialog-surface"
    >
      <button
        type="button"
        className="about-support-dialog-close"
        aria-label={UI_TEXT.common.close}
        onClick={onClose}
      >
        <X size={16} aria-hidden />
      </button>
      <div className="about-support-dialog-body">
        <section className="about-support-card">
          <div className="about-support-card-heading">
            <Heart size={15} aria-hidden />
            <h4>{UI_TEXT.about.wechatRewardTitle}</h4>
          </div>
          <div className="about-wechat-reward-frame">
            <img
              className="about-wechat-reward-image about-wechat-reward-image-light"
              src={wechatRewardLightUrl}
              alt={UI_TEXT.about.wechatRewardAlt}
              data-reward-theme="light"
              draggable={false}
            />
            <img
              className="about-wechat-reward-image about-wechat-reward-image-dark"
              src={wechatRewardDarkUrl}
              alt={UI_TEXT.about.wechatRewardAlt}
              data-reward-theme="dark"
              draggable={false}
            />
          </div>
          <p>{UI_TEXT.about.wechatRewardHint}</p>
        </section>

        <section className="about-support-card about-support-kofi-card">
          <div className="about-support-card-heading">
            <Heart size={15} aria-hidden />
            <h4>{UI_TEXT.about.kofiTitle}</h4>
          </div>
          <div className="about-kofi-button-frame">
            <button
              type="button"
              className="about-kofi-button"
              aria-label={UI_TEXT.about.openKofi}
              onClick={onOpenKofi}
            >
              <img
                src={kofiButtonUrl}
                alt=""
                draggable={false}
              />
            </button>
          </div>
          <p>{UI_TEXT.about.kofiHint}</p>
        </section>
      </div>
    </QuietDialog>
  );
}
