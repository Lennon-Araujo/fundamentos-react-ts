import styles from './Avatar.module.css';

interface AvatarProps {
  src: string;
  isComment?: boolean;
}

export function Avatar({src, isComment}: AvatarProps) {
  return (
    <img
      className={isComment ? styles.avatarWithoutBorder : styles.avatar}
      src={src}
    />
  )
}
