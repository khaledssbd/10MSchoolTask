'use client';

import { Section } from '@/types';
import {
  BicepsFlexed,
  Brain,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Circle,
  CircleGauge,
  ClipboardPen,
  File,
  FileText,
  Focus,
  Headset,
  LayoutTemplate,
  LibraryBig,
  Lightbulb,
  MessageSquareMore,
  NotebookText,
  Pen,
  Pin,
  Play,
  Search,
  Sheet,
  ShieldQuestionMark,
  Spade,
  Timer,
  Volume2,
} from 'lucide-react';
// import { PlayCircle, Lock } from 'lucide-react';

import { useState } from 'react';

const courseData = [
  {
    id: 'intro',
    title: 'Introduction',
    items: [
      { type: 'video', title: 'IELTS: Introduction', free: true },
      { type: 'video', title: 'IELTS: Overview', free: true },
      { type: 'video', title: 'How to Prepare for IELTS?', free: true },
      { type: 'video', title: 'Making a Daily Routine', free: true },
      {
        type: 'video',
        title: 'Different Sentence Structures to Improve Writing',
        free: false,
      },
      { type: 'text', title: 'IELTS General Facts', free: false },
      { type: 'text', title: 'IELTS Vocabulary', free: false },
    ],
  },
  {
    id: 'munzereen-course',
    title: 'IELTS Course by Munzereen Shahid | Exclusive Support Group',
    items: [
      {
        type: 'module',
        title: 'Module 1: Getting Started',
        subItems: [
          { type: 'video', title: 'Welcome to the Course' },
          { type: 'pdf', title: 'Course Syllabus' },
          { type: 'text', title: 'Discussion: Introduction & Goal Setting' },
        ],
      },
      {
        type: 'module',
        title: 'Module 2: Practice & Feedback',
        subItems: [
          { type: 'video', title: 'Submitting Your First Assignment' },
          { type: 'text', title: 'Resource: Peer Review Guidelines' },
          { type: 'quiz', title: 'Quiz: Understanding Feedback' },
        ],
      },
      {
        type: 'module',
        title: 'Module 3: Advanced Strategies',
        subItems: [
          { type: 'video', title: 'Time Management Techniques' },
          { type: 'pdf', title: 'Advanced Vocabulary List' },
          { type: 'webinar', title: 'Webinar: Q&A with Munzereen Shahid' },
        ],
      },
    ],
  },
  {
    id: 'academic-reading',
    title: 'Academic Reading',
    items: [
      {
        type: 'lesson',
        title: 'Lesson 1: Skimming and Scanning',
        subItems: [
          { type: 'video', title: 'Mastering Skimming' },
          { type: 'practice', title: 'Practice Set: Skimming Exercises' },
        ],
      },
      {
        type: 'lesson',
        title: 'Lesson 2: Identifying Main Ideas',
        subItems: [
          { type: 'video', title: 'Locating Topic Sentences' },
          { type: 'quiz', title: 'Quiz: Main Idea Identification' },
        ],
      },
      {
        type: 'lesson',
        title: 'Lesson 3: Dealing with Difficult Vocabulary',
        subItems: [
          { type: 'video', title: 'Contextual Clues' },
          { type: 'worksheet', title: 'Worksheet: Vocabulary Building' },
        ],
      },
    ],
  },
  {
    id: 'academic-reading-mock',
    title: 'Academic Reading Mock Test',
    items: [
      {
        type: 'mock',
        title: 'Mock Test 1: University Life',
        subItems: [
          { type: 'pdf', title: 'Test Paper' },
          { type: 'audio', title: 'Instructions' },
          { type: 'solution', title: 'Solution: Answer Key & Explanations' },
        ],
      },
      {
        type: 'mock',
        title: 'Mock Test 2: Environmental Issues',
        subItems: [
          { type: 'pdf', title: 'Test Paper' },
          { type: 'timer', title: 'Timer: Recommended Time' },
          { type: 'discussion', title: 'Discussion Forum: Post-Test Analysis' },
        ],
      },
    ],
  },
  {
    id: 'listening',
    title: 'Listening',
    items: [
      {
        type: 'lesson',
        title: 'Lesson 1: Understanding Accents',
        subItems: [
          { type: 'audio', title: 'Different English Accents' },
          { type: 'activity', title: 'Activity: Accent Recognition' },
        ],
      },
      {
        type: 'lesson',
        title: 'Lesson 2: Note-Taking Techniques',
        subItems: [
          { type: 'video', title: 'Effective Note-Taking' },
          {
            type: 'practice',
            title: 'Practice: Listening & Note-Taking Drills',
          },
        ],
      },
      {
        type: 'lesson',
        title: 'Lesson 3: Common Listening Traps',
        subItems: [
          { type: 'video', title: 'Distractors and Synonyms' },
          { type: 'quiz', title: 'Quiz: Trap Identification' },
        ],
      },
    ],
  },
  {
    id: 'listening-mock',
    title: 'Listening Mock Test',
    items: [
      {
        type: 'mock',
        title: 'Mock Test 1: Daily Conversations',
        subItems: [
          { type: 'audio', title: 'Section 1 & 2' },
          { type: 'pdf', title: 'Question Paper' },
          { type: 'correction', title: 'Self-Correction: Script Provided' },
        ],
      },
      {
        type: 'mock',
        title: 'Mock Test 2: Academic Lectures',
        subItems: [
          { type: 'audio', title: 'Section 3 & 4' },
          { type: 'quiz', title: 'Online Quiz: Timed Submission' },
          { type: 'feedback', title: 'Feedback: Score Breakdown' },
        ],
      },
    ],
  },
  {
    id: 'academic-writing',
    title: 'Academic Writing',
    items: [
      {
        type: 'lesson',
        title: 'Lesson 1: Task 1: Report Writing',
        subItems: [
          { type: 'video', title: 'Analyzing Graphs & Charts' },
          { type: 'examples', title: 'Examples: Sample Band 7+ Reports' },
        ],
      },
      {
        type: 'lesson',
        title: 'Lesson 2: Task 2: Essay Writing',
        subItems: [
          { type: 'video', title: 'Argumentative Essay Structure' },
          { type: 'templates', title: 'Templates: Essay Planning Outlines' },
        ],
      },
      {
        type: 'lesson',
        title: 'Lesson 3: Grammar & Punctuation Review',
        subItems: [
          { type: 'video', title: 'Common Errors to Avoid' },
          {
            type: 'exercise',
            title: 'Interactive Exercise: Correcting Sentences',
          },
        ],
      },
    ],
  },
  {
    id: 'speaking',
    title: 'Speaking',
    items: [
      {
        type: 'lesson',
        title: 'Lesson 1: Part 1: Interview',
        subItems: [
          { type: 'video', title: 'Answering Personal Questions' },
          { type: 'practice', title: 'Practice: Role-Playing Scenarios' },
        ],
      },
      {
        type: 'lesson',
        title: 'Lesson 2: Part 2: Long Turn',
        subItems: [
          { type: 'video', title: 'Developing a Coherent Talk' },
          { type: 'cards', title: 'Cue Cards: Practice Topics' },
        ],
      },
      {
        type: 'lesson',
        title: 'Lesson 3: Part 3: Discussion',
        subItems: [
          { type: 'video', title: 'Expressing Opinions & Justifying' },
          { type: 'debate', title: 'Debate: Group Discussions' },
        ],
      },
    ],
  },
  {
    id: 'general-reading',
    title: 'General Training Reading',
    items: [
      {
        type: 'lesson',
        title: 'Lesson 1: Understanding Advertisements',
        subItems: [
          { type: 'video', title: 'Key Information Extraction' },
          { type: 'worksheet', title: 'Worksheet: Ad Analysis' },
        ],
      },
      {
        type: 'lesson',
        title: 'Lesson 2: Navigating Information Booklets',
        subItems: [
          { type: 'video', title: 'Locating Specific Details' },
          { type: 'practice', title: 'Practice Set: Booklet Questions' },
        ],
      },
    ],
  },
  {
    id: 'general-reading-mock',
    title: 'General Reading Mock Test',
    items: [
      {
        type: 'mock',
        title: 'Mock Test 1: Everyday Situations',
        subItems: [
          { type: 'pdf', title: 'Test Booklet' },
          { type: 'sheet', title: 'Answer Sheet: For Self-Evaluation' },
        ],
      },
      {
        type: 'mock',
        title: 'Mock Test 2: Community Information',
        subItems: [
          { type: 'pdf', title: 'Practice Questions' },
          { type: 'timer', title: 'Online Timer: Simulate Exam Conditions' },
        ],
      },
    ],
  },
  {
    id: 'general-writing',
    title: 'General Training Writing',
    items: [
      {
        type: 'lesson',
        title: 'Lesson 1: Task 1: Letter Writing',
        subItems: [
          { type: 'video', title: 'Formal vs. Informal Letters' },
          { type: 'examples', title: 'Examples: Complaint & Request Letters' },
        ],
      },
      {
        type: 'lesson',
        title: 'Lesson 2: Task 2: Essay Writing (General)',
        subItems: [
          { type: 'video', title: 'Opinion & Problem/Solution Essays' },
          { type: 'brainstorming', title: 'Brainstorming: Topic Ideas' },
        ],
      },
    ],
  },
  {
    id: 'zoom-live',
    title: 'ZOOM Live Class',
    items: [
      {
        type: 'session',
        title: 'Session 1: IELTS Writing Q&A',
        subItems: [
          { type: 'date', title: 'Date: July 20, 2025' },
          { type: 'topic', title: 'Topic: Essay Feedback & Strategies' },
        ],
      },
      {
        type: 'session',
        title: 'Session 2: Speaking Practice Workshop',
        subItems: [
          { type: 'date', title: 'Date: August 5, 2025' },
          { type: 'focus', title: 'Focus: Fluency & Coherence' },
        ],
      },
      {
        type: 'session',
        title: 'Session 3: Reading Comprehension Deep Dive',
        subItems: [
          { type: 'date', title: 'Date: August 20, 2025' },
          { type: 'review', title: 'Review: Difficult Passage Types' },
        ],
      },
    ],
  },
  {
    id: 'paper-templates',
    title: 'IELTS Paper Based Templates',
    items: [
      {
        type: 'templates',
        title: 'Writing Task 1 Templates',
        subItems: [
          { type: 'pdf', title: 'Academic Reports' },
          { type: 'pdf', title: 'General Training Letters' },
        ],
      },
      {
        type: 'templates',
        title: 'Writing Task 2 Templates',
        subItems: [
          { type: 'pdf', title: 'Essay Structures (All Types)' },
          { type: 'doc', title: 'Useful Phrases & Connectors' },
        ],
      },
    ],
  },
  {
    id: 'ielts-mock-pdf',
    title: 'IELTS Mock Test (PDF Questions)',
    items: [
      {
        type: 'mock',
        title: 'Full Mock Test 1',
        subItems: [
          { type: 'pdf', title: 'Reading Section' },
          { type: 'pdf', title: 'Listening Section' },
          { type: 'pdf', title: 'Writing Section' },
          { type: 'pdf', title: 'Speaking Questions' },
          { type: 'pdf', title: 'Answer Keys' },
        ],
      },
      {
        type: 'mock',
        title: 'Full Mock Test 2',
        subItems: [
          { type: 'pdf', title: 'Complete Test Paper' },
          { type: 'pdf', title: 'Scoring Guidelines' },
        ],
      },
    ],
  },
];

// Helper function remains unchanged
const getIcon = (type: any) => {
  switch (type) {
    case 'video':
      return Play;
    case 'pdf':
      return FileText;
    case 'audio':
      return Headset;
    case 'text':
      return ClipboardPen;
    case 'quiz':
      return ShieldQuestionMark;
    case 'practice':
      return Pen;
    case 'solution':
      return Check;
    case 'timer':
      return Timer;
    case 'discussion':
      return Volume2;
    case 'worksheet':
      return NotebookText;
    case 'activity':
      return Lightbulb;
    case 'correction':
      return Pen;
    case 'feedback':
      return MessageSquareMore;
    case 'examples':
      return LibraryBig;
    case 'templates':
      return LayoutTemplate;
    case 'exercise':
      return BicepsFlexed;
    case 'cards':
      return Spade;
    case 'debate':
      return CircleGauge;
    case 'sheet':
      return Sheet;
    case 'brainstorming':
      return Brain;
    case 'date':
      return Calendar;
    case 'topic':
      return Pin;
    case 'focus':
      return Focus;
    case 'review':
      return Search;
    case 'doc':
      return File;
    default:
      return Circle;
  }
};

export type ToggleType = {
  [key: string]: boolean;
};

const ContentPreview = ({
  contentPreviewSection = [],
}: {
  contentPreviewSection: Section[];
}) => {
  const [expandedSections, setExpandedSections] = useState<ToggleType>({
    intro: true,
  });
  const [showAllModules, setShowAllModules] = useState(false);

  const toggleSection = (key: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const visibleSections = showAllModules ? courseData : courseData.slice(0, 5);

  return (
    <div className="p-6">
      {contentPreviewSection?.map(subSection => (
        <div key={subSection.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {subSection.name}
          </h2>
          <div className="relative bg-white rounded-md border border-gray-300 p-6 space-y-3">
            {/* {section.values?.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-gray-100"
              >
                <div className="flex items-center space-x-3">
                  {item.is_free ? (
                    <PlayCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <Lock className="w-6 h-6 text-gray-400" />
                  )}
                  <span className="font-medium text-gray-800">
                    {item.title}
                  </span>
                </div>
                <button className="text-sm font-semibold text-green-600 hover:underline">
                  {item.is_free ? 'ফ্রি দেখুন' : 'লক করা'}
                </button>
              </div>
            ))} */}
            {visibleSections.map(vSubSection => (
              <div
                key={vSubSection.id}
                className="border-b border-gray-100 last:border-b-0"
              >
                <div
                  className={`flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold text-gray-700 ${
                    expandedSections[vSubSection.id]
                      ? 'border-b border-gray-200'
                      : ''
                  }`}
                  onClick={() => toggleSection(vSubSection.id)}
                >
                  <span>{vSubSection.title}</span>
                  <span
                    className={`transform transition-transform duration-300 text-lg ${
                      expandedSections[vSubSection.id] ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedSections[vSubSection.id]
                      ? 'max-h-screen opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 pt-2">
                    {vSubSection.items.map((item, index) => {
                      const MainItemIcon = getIcon(item.type);

                      return (
                        <div key={index}>
                          <div
                            className={`flex items-center py-2 text-gray-600 ${
                              'free' in item && item.free === false
                                ? 'text-gray-400'
                                : ''
                            }`}
                          >
                            <MainItemIcon
                              className={`w-5 h-5 mr-2 rounded-full p-1 text-white fill-white ${
                                'free' in item && item.free === false
                                  ? 'bg-gray-400'
                                  : 'bg-green-600'
                              }`}
                            />

                            <span>{item.title}</span>

                            {'free' in item && item.free && (
                              <span className="ml-auto text-green-500 font-bold text-sm">
                                ফ্রি দেখুন
                              </span>
                            )}
                          </div>
                          {'subItems' in item && item.subItems && (
                            <div className="ml-6 border-l border-gray-200 pl-4 py-1">
                              {item.subItems.map((subItem, subIndex) => {
                                const SubItemIcon = getIcon(subItem.type);

                                return (
                                  <div
                                    key={subIndex}
                                    className="flex items-center py-1 text-gray-500 text-sm"
                                  >
                                    <SubItemIcon
                                      className={`w-5 h-5 mr-2 ${
                                        'free' in item && item.free === false
                                          ? 'text-gray-400'
                                          : 'text-blue-600'
                                      }`}
                                    />
                                    <span>{subItem.title}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}

            <button
              className="absolute -bottom-5 w-fit px-4 py-2 left-0 right-0 block mx-auto text-center bg-gray-50 rounded-full cursor-pointer text-gray-500 hover:text-black text-sm transition-colors duration-200"
              onClick={() => setShowAllModules(prev => !prev)}
            >
              {showAllModules ? (
                <div className="flex justify-center items-center gap-2">
                  কম দেখুন <ChevronUp className="w-4 h-4" />
                </div>
              ) : (
                <div className="flex justify-center items-center gap-2">
                  সকল কন্টেন্ট <ChevronDown className="w-4 h-4" />
                </div>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentPreview;
