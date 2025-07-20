"use client";

import { useState } from "react";
import Icon, { IconType } from "../layout/Icon";
import Card from "../layout/Card";
import Heading from "../layout/Heading";
import Description from "../layout/Description";
import Button from "../layout/Button";
import Modal from "../layout/Modal";

interface Props {
  icon: IconType;
  title: string;
  description: string;
  buttonText: string;
  code: string;
}

export default function ReachOutItem({
  icon,
  title,
  description,
  buttonText,
  code,
}: Props) {
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

        <Button text={buttonText} onClick={() => setOpenModal(true)} />
      </Card>

      <Modal openModal={openModal} setOpenModal={setOpenModal} code={code} />
    </>
  );
}
