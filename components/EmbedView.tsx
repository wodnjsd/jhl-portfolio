interface Props {
  embedUrl: string;
}

function soundcloudEmbedSrc(trackUrl: string): string {
  const params = new URLSearchParams({
    url: trackUrl,
    color: "0a0a0a",
    auto_play: "false",
    hide_related: "false",
    show_comments: "true",
    show_user: "true",
    show_reposts: "false",
    show_teaser: "true",
    visual: "true",
  });
  return `https://w.soundcloud.com/player/?${params.toString()}`;
}

export default function EmbedView({ embedUrl }: Props) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xl">
        <div className="w-full aspect-video min-h-[166px] relative rounded-sm border border-neutral-200 bg-neutral-50 overflow-hidden">
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={soundcloudEmbedSrc(embedUrl)}
          title="SoundCloud"
          className="absolute inset-0 w-full h-full"
        />
        </div>
      </div>
    </div>
  );
}
