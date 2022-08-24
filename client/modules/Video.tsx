import { forwardRef } from 'react';
import { Participant } from 'twilio-video';
import styles from 'styles/Home.module.css';

interface VideoProps {
  participant: Participant;
  hasVideo?: boolean;
  isLoading?: boolean;
  isRemote?: boolean;
}

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ participant, hasVideo = true, isLoading, isRemote }, ref) => {
    return (
      <div
        className={styles.videoContainer}
        style={{ borderColor: isRemote ? 'red' : 'blue' }}
      >
        <video
          className={styles.videoElement}
          style={{
            display: hasVideo ? 'flex' : 'none',
          }}
          ref={ref}
          autoPlay
          playsInline
        />
        {!hasVideo && (
          <div className={styles.avatarContainer}>
            {isLoading ? 'Kamera Açılıyor' : 'Kamera yok'}
          </div>
        )}
        {/* <span>{participant.identity}</span> */}
      </div>
    );
  }
);

export default Video;
