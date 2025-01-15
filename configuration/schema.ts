type JustLesson = `${string}|${string}`;

type LessonWithDescription = `${JustLesson}|${string}`;

type Lesson = JustLesson | LessonWithDescription;

type LessonSlot = Lesson | null;

type Time = `${string}:${string}`;

interface TimeSlot {
  customTime: Time,
  lessons: LessonSlot[],
}

type Day = (LessonSlot | TimeSlot)[];

type Week = (Day | null)[];

export type Schedule = {
  $schema: string,

  /**
   * MUST BE IN ISO 8061. Starts with Monday
   */
  firstWeek: `${string}-${string}-${string}`
  weeks: Week[]
}

export type CallSchedule = Record<number, [Time, Time]>;