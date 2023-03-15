import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

export default function ShowVideo() {
  // When this component is rendered, we can grab a video id from react router
  const { videoId } = useParams();

  return (
    <>
      <h2>Show Video Page</h2>
      <YouTube videoId={videoId} />
    </>
  );
}
