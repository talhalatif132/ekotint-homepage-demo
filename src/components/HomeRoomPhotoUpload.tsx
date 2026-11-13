import Icon from "@/components/Icon";
import styles from "./HomeRoomPhotoUpload.module.css";

export default function HomeRoomPhotoUpload({ idPrefix }: { idPrefix: string }) {
  const purposeId = `${idPrefix}-photo-purpose`;
  const statusId = `${idPrefix}-photo-status`;

  return <aside className={styles.upload} aria-label="Your own room photo">
    <div className={styles.copy}>
      <h2>Try colours in your own room</h2>
      <p id={purposeId}>Use a room photo to preview paint on your walls.</p>
    </div>
    <div className={styles.actions}>
      <button type="button" disabled aria-describedby={`${purposeId} ${statusId}`}>
        <Icon name="upload" size={17} />
        <span>Upload room photo</span>
      </button>
      <span className={styles.status} id={statusId}>Coming soon</span>
    </div>
  </aside>;
}
