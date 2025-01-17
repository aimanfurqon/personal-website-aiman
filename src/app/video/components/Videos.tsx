import { getPosts } from "@/app/utils";
import { Flex } from "@/once-ui/components";
import { ProjectCard } from "@/app/components";
import styles from "@/app/video/components/videos.module.scss"; // Import file gaya

interface VideosProps {
  range?: [number, number?];
}

export function Videos({ range }: VideosProps) {
  let allVideos = getPosts(["src", "app", "video", "projects"]);
  console.log("All Videos:", allVideos);
  const sortedVideos = allVideos.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedVideos = range
    ? sortedVideos.slice(range[0] - 1, range[1] ?? sortedVideos.length)
    : sortedVideos;

  return (
    <Flex fillWidth gap="l" marginBottom="40" paddingX="l" direction="column">
      {displayedVideos.map((post) => (
        <div className={styles["video-hover"]} key={post.slug}>
          <ProjectCard
            href={`/video/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={
              post.metadata.team?.map((member) => ({ src: member.avatar })) ||
              []
            }
          />
        </div>
      ))}
    </Flex>
  );
}
