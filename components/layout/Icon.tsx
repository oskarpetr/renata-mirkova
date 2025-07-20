"use client";

import {
  CaretDownIcon,
  IconWeight,
  ChatCircleIcon,
  PaperPlaneTiltIcon,
  ShareNetworkIcon,
  CalendarBlankIcon,
  GraduationCapIcon,
  ClockIcon,
  UserIcon,
  MoneyIcon,
  StarIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
  XIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
  TiktokLogoIcon,
  ThreadsLogoIcon,
  PinterestLogoIcon,
  SnapchatLogoIcon,
  LinktreeLogoIcon,
  WhatsappLogoIcon,
  PhoneIcon,
  CheckIcon,
  ListIcon,
} from "@phosphor-icons/react";

export type IconType =
  | "CaretDownIcon"
  | "ChatCircleIcon"
  | "EnvelopeOpenIcon"
  | "PaperPlaneTiltIcon"
  | "ShareNetworkIcon"
  | "CalendarBlankIcon"
  | "GraduationCapIcon"
  | "ClockIcon"
  | "UserIcon"
  | "MoneyIcon"
  | "StarIcon"
  | "MapPinIcon"
  | "XIcon"
  | "FacebookLogoIcon"
  | "InstagramLogoIcon"
  | "LinkedinLogoIcon"
  | "TwitterLogoIcon"
  | "XLogoIcon"
  | "YoutubeLogoIcon"
  | "TiktokLogoIcon"
  | "ThreadsLogoIcon"
  | "PinterestLogoIcon"
  | "SnapchatLogoIcon"
  | "LinktreeLogoIcon"
  | "WhatsappLogoIcon"
  | "PhoneIcon"
  | "CheckIcon"
  | "ListIcon";

interface Props {
  name: IconType;
  size?: number;
  weight?: IconWeight;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export default function Icon({
  name,
  size = 24,
  weight = "regular",
  color = "currentColor",
  className,
  onClick,
}: Props) {
  const icons = {
    CaretDownIcon,
    ChatCircleIcon,
    EnvelopeOpenIcon,
    PaperPlaneTiltIcon,
    ShareNetworkIcon,
    CalendarBlankIcon,
    GraduationCapIcon,
    ClockIcon,
    UserIcon,
    MoneyIcon,
    StarIcon,
    MapPinIcon,
    XIcon,
    FacebookLogoIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
    TwitterLogoIcon,
    XLogoIcon,
    YoutubeLogoIcon,
    TiktokLogoIcon,
    ThreadsLogoIcon,
    PinterestLogoIcon,
    SnapchatLogoIcon,
    LinktreeLogoIcon,
    WhatsappLogoIcon,
    PhoneIcon,
    CheckIcon,
    ListIcon,
  };
  const PhosphorIcon = icons[name as keyof typeof icons];

  if (!PhosphorIcon) return null;

  return (
    <PhosphorIcon
      size={size}
      weight={weight}
      color={color}
      className={className}
      onClick={onClick}
    />
  );
}
