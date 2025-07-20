"use client";

import { useEffect, useRef } from "react";
import HanziWriter, { HanziWriterOptions } from "hanzi-writer";

export default function Characters() {
  const char1Ref = useRef<HTMLDivElement>(null);
  const char2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: Partial<HanziWriterOptions> = {
      width: 200,
      height: 200,
      padding: 0,
      strokeAnimationSpeed: 0.5,
      delayBetweenStrokes: 0,
      showCharacter: false,
      strokeColor: "#000",
      outlineColor: "#c2c2c2",
      strokeFadeDuration: 0,
      drawingWidth: 50,
      drawingColor: "#000",
      highlightOnComplete: false,
      highlightColor: "#000",
      strokeHighlightSpeed: 0.5,
      showHintAfterMisses: 2,
    };

    if (char1Ref.current && char2Ref.current) {
      console.log("Creating HanziWriter instances...");
      const char1 = HanziWriter.create(char1Ref.current, "汉", options);
      HanziWriter.create(char2Ref.current, "字", options);

      startStrokeQuiz(0, char1);
    }
  }, []);

  const startStrokeQuiz = async (strokeNum: number, writer: HanziWriter) => {
    await writer.animateStroke(strokeNum);

    writer.quiz({
      quizStartStrokeNum: strokeNum,
      onCorrectStroke: async () => {
        console.log(`Stroke ${strokeNum} correct!`);

        await new Promise((res) => setTimeout(res, 400));
        const nextStroke = strokeNum + 1;

        if (nextStroke < (await writer.getCharacterData()).strokes.length) {
          startStrokeQuiz(nextStroke, writer);
        } else {
          console.log("Character complete!");
        }
      },
      onMistake: () => {
        console.log("Try again.");
      },
    });
  };

  return (
    <div className="flex gap-4">
      <div
        ref={char1Ref}
        className="relative overflow-hidden border border-neutral-200 p-4"
      >
        <div className="absolute top-1/2 left-0 -z-10 h-[1px] w-full -translate-y-1/2 bg-neutral-200"></div>
        <div className="absolute top-0 left-1/2 -z-10 h-full w-[1px] -translate-x-1/2 bg-neutral-200"></div>
        <div className="absolute -top-1/2 left-1/2 -z-10 h-[200%] w-[1px] rotate-45 bg-neutral-200"></div>
        <div className="absolute -top-1/2 left-1/2 -z-10 h-[200%] w-[1px] -rotate-45 bg-neutral-200"></div>
      </div>

      <div
        ref={char2Ref}
        className="relative overflow-hidden border border-neutral-200 p-4"
      >
        <div className="absolute top-1/2 left-0 -z-10 h-[1px] w-full -translate-y-1/2 bg-neutral-200"></div>
        <div className="absolute top-0 left-1/2 -z-10 h-full w-[1px] -translate-x-1/2 bg-neutral-200"></div>
        <div className="absolute -top-1/2 left-1/2 -z-10 h-[200%] w-[1px] rotate-45 bg-neutral-200"></div>
        <div className="absolute -top-1/2 left-1/2 -z-10 h-[200%] w-[1px] -rotate-45 bg-neutral-200"></div>
      </div>
    </div>
  );
}
