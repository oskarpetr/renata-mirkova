"use client";

import { useState } from "react";
import Icon from "../layout/Icon";
import Card from "../layout/Card";
import Heading from "../layout/Heading";
import Description from "../layout/Description";
import Button from "../layout/Button";
import Modal from "../layout/Modal";
import { ReachOutCard } from "@/types/ReachOut.types";
import Link from "next/link";

interface Props {
  card: ReachOutCard;
  email: string;
}

export default function ReachOutItem({ card, email }: Props) {
  const { icon, title, description, button } = card;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card>
        <div className="text-yellow-500">
          <Icon name={icon} size={32} weight="fill" />
        </div>

        <div className="flex flex-col gap-2">
          <Heading text={title} type="h3" />
          <Description description={description} />
        </div>

        {button.buttonAction === "openForm" ? (
          <Button text={button.text} onClick={() => setOpenModal(true)} />
        ) : (
          <Link href={`mailto:${email}`}>
            <Button text={button.text} />
          </Link>
        )}
      </Card>

      {button.buttonAction === "openForm" && button.code && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          code={button.code}
        />
      )}
    </>
  );
}
