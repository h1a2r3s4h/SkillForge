export function buildRoadmapPrompt({
  targetRole,
  currentLevel,
  currentSkills,
  hoursPerDay,
  duration,
  weakAreas,
}) {
  return `
You are an expert AI career coach, senior software mentor, and placement strategist.

Your task is to generate a deeply useful, highly practical, personalized learning roadmap for a user.

The roadmap must be clear, realistic, structured, and tailored to the user's target role, current level, current skills, available hours, duration, and weak areas.

The response must be STRICT JSON only.
Do not include markdown.
Do not include code fences.
Do not include explanations outside JSON.

User Input:
- Target Role: ${targetRole}
- Current Level: ${currentLevel}
- Current Skills: ${currentSkills}
- Hours Per Day: ${hoursPerDay}
- Duration: ${duration}
- Weak Areas: ${weakAreas}

Return JSON in exactly this structure:

{
  "goalSummary": "A concise 4-6 line summary of the user's goal, current state, and most important direction.",
  "skillGapAnalysis": [
    "List the most important missing or weak skill gap 1",
    "List the most important missing or weak skill gap 2",
    "List the most important missing or weak skill gap 3",
    "List the most important missing or weak skill gap 4"
  ],
  "weeklyRoadmap": [
    {
      "week": "Week 1",
      "focus": "Main focus of this week",
      "tasks": [
        "Task 1",
        "Task 2",
        "Task 3",
        "Task 4"
      ]
    }
  ],
  "projectSuggestions": [
    "Project suggestion 1 with why it is useful",
    "Project suggestion 2 with why it is useful",
    "Project suggestion 3 with why it is useful"
  ],
  "interviewPrep": [
    "Interview prep point 1",
    "Interview prep point 2",
    "Interview prep point 3",
    "Interview prep point 4"
  ]
}

Rules:
1. Make the roadmap personalized, not generic.
2. The weekly roadmap should match the user's duration. If the duration is 6 weeks, return 6 week objects. If it is 8 weeks, return 8 week objects. If the exact number is unclear, infer a practical number from the duration.
3. Keep tasks realistic for the user's available hours per day.
4. Include both learning + building + revision + interview preparation.
5. Prioritize weak areas while still moving toward the target role.
6. Project suggestions must be resume-worthy and aligned with the target role.
7. Interview prep should include DSA/core subjects/projects/communication if relevant.
8. Keep everything concise, practical, and actionable.
9. Avoid fluff, motivational filler, and vague advice.
10. Output valid JSON only.

Now generate the JSON response.
  `.trim();
}