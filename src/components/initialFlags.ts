
import { Flags } from './types';

export const initialFlags: Flags = {
    loveBombing: {
      type: 'expandable',
      mainText: "Showers you with excessive affection and grand gestures early on",
      options: [
        { text: "Occasionally shows affection", weightage: 5 },
        { text: "Frequently gives expensive gifts", weightage: 10 },
        { text: "Constantly professes undying love", weightage: 20 }
      ],
      selectedOption: null,
      isSelected: false,
    },
    inconsistentCommunication: {
      type: 'expandable',
      mainText: "Communication is unpredictable or hot-and-cold",
      options: [
        { text: "Often goes days without contact", weightage: 10 },
        { text: "Alternates between oversharing and ghosting", weightage: 20 }
      ],
      selectedOption: null,
      isSelected: false,
    },
    mixedSignals: {
      type: 'simple',
      mainText: "Gives mixed signals or sends confusing messages. Often sharing a lot about themselves, but not asking about you or does not reciprocate.",
      weightage: 20,
      selectedOption: null,
      isSelected: false,
    },
    gaslighting: {
      type: 'expandable',
      mainText: "Gaslighting you",
      options: [
        { text: "Blames you for feeling a certain way", weightage: 10 },
        { text: "Insists you're imagining things", weightage: 20 }
      ],
      selectedOption: null,
      isSelected: false,
    },
    isolation: {
      type: 'expandable',
      mainText: "Discourages you from spending time with friends and family",
      options: [
        { text: "Gets jealous when you're with others", weightage: 10 },
        { text: "Demands all your attention and time", weightage: 20 }
      ],
      selectedOption: null,
      isSelected: false,
    },
    boundaryViolations: {
      type: 'expandable',
      mainText: "Disregards your boundaries and personal space",
      options: [
        { text: "Pushes your boundaries without consent", weightage: 10 },
        { text: "Becomes angry when you set limits", weightage: 20 }
      ],
      selectedOption: null,
      isSelected: false,
    },
    manipulation: {
      type: 'expandable',
      mainText: "Uses guilt, fear, or shame to control your actions",
      options: [
        { text: "Threatens to leave if you don't comply", weightage: 10 },
        { text: "Blames you for their own behavior", weightage: 20 }
      ],
      selectedOption: null,
      isSelected: false,
    },
    secrecy: {
      type: 'expandable',
      mainText: "Hides aspects of their life or relationship with you",
      options: [
        { text: "Avoids discussing their past or future", weightage: 10 },
        { text: "Lies about their whereabouts or activities", weightage: 20 }
      ],
      selectedOption: null,
      isSelected: false,
    },
    codependency: {
      type: 'expandable',
      mainText: "Relies on you for emotional support and validation",
      options: [
        { text: "Expects you to solve all their problems", weightage: 10 },
        { text: "Threatens self-harm if you leave", weightage: 20 }
      ],
      selectedOption: null,
      isSelected: false,
    },
    disrespect: {
      type: 'expandable',
      mainText: "Disrespects your opinions, boundaries, or autonomy",
      options: [
        { text: "Belittles your choices and values", weightage: 10 },
        { text: "Controls your decisions and actions", weightage: 20 }
      ],
      selectedOption: null,
      isSelected: false,
    },
    futureFaking: {
      type: 'expandable',
      mainText: "Makes promises or commitments without following through",
      options: [
        { text: "Often cancels plans or changes their mind", weightage: 10 },
        { text: "Makes grand plans but never acts on them", weightage: 20 }
      ],
      selectedOption: null,
      isSelected: false,
    },
    jealousy: {
      type: 'simple',
      mainText: "Shows excessive jealousy or possessiveness",
      weightage: 15,
      selectedOption: null,
      isSelected: false,
    },
    financialControl: {
      type: 'simple',
      mainText: "Attempts to control your finances or spending",
      weightage: 20,
      selectedOption: null,
      isSelected: false,
    },
    physicalAggression: {
      type: 'simple',
      mainText: "Displays any form of physical aggression or violence",
      weightage: 25,
      selectedOption: null,
      isSelected: false,
    },
    goesOutWithManyOtherPeopleExceptYou: {
      type: 'simple',
      mainText: "Goes out with many other people except you",
      weightage: 10,
      selectedOption: null,
      isSelected: false,
    },
    narcissist: {
      type: 'simple',
      mainText: "Talks only about themselves and their achievements",
      weightage: 10,
      selectedOption: null,
      isSelected: false,
    },
  };