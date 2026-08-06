"use client";
import { Player } from "@remotion/player";
import ServiceIllustration, { type ServiceIllustrationProps } from "./remotion/ServiceIllustration";

export default function ServiceIllustrationPlayer(props: ServiceIllustrationProps) {
  return (
    <Player
      component={ServiceIllustration}
      inputProps={props}
      durationInFrames={480}
      fps={30}
      compositionWidth={420}
      compositionHeight={360}
      style={{ width: "100%", height: "100%" }}
      loop
      autoPlay
      controls={false}
      clickToPlay={false}
      showVolumeControls={false}
      allowFullscreen={false}
      spaceKeyToPlayOrPause={false}
      doubleClickToFullscreen={false}
      posterFillMode="player-size"
      acknowledgeRemotionLicense
    />
  );
}
