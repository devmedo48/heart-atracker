export type Language = 'en' | 'ar'

export interface Translations {
  // Navigation
  dashboard: string
  heartRate: string
  sleep: string
  temperature: string
  activity: string
  notifications: string
  recommendations: string
  settings: string

  // Common
  loading: string
  save: string
  cancel: string
  delete: string
  edit: string
  view: string
  close: string
  back: string
  next: string
  previous: string
  search: string
  filter: string
  sort: string
  all: string
  none: string
  yes: string
  no: string
  ok: string
  error: string
  success: string
  warning: string
  info: string

  // Dashboard
  healthTracker: string
  overview: string
  currentTime: string
  live: string
  static: string
  goal: string
  progress: string
  complete: string
  achieved: string
  almostThere: string
  goodProgress: string
  keepMoving: string

  // Heart Rate
  heartRateMonitoring: string
  trackYourHeartRate: string
  currentHeartRate: string
  bpm: string
  restingRate: string
  averageToday: string
  high: string
  normal: string
  low: string
  elevated: string
  heartRateZones: string
  zone1: string
  zone2: string
  zone3: string
  zone4: string
  zone5: string
  dailyInsights: string

  // Sleep
  sleepMonitoring: string
  trackYourSleepPatterns: string
  lastNight: string
  sleepQuality: string
  bedtime: string
  wakeTime: string
  deepSleep: string
  lightSleep: string
  remSleep: string
  excellent: string
  good: string
  fair: string
  poor: string
  consistentBedtime: string
  naturalWakeCycle: string
  sleepQualityOverTime: string
  weeklySleepOverview: string
  sleepInsights: string
  consistentSleepSchedule: string
  maintainedConsistentBedtime: string
  goodDeepSleep: string
  deepSleepAboveRecommended: string
  roomForImprovement: string
  reduceScreenTime: string
  sleepRecommendations: string
  optimizeEnvironment: string
  keepBedroomCool: string
  establishRoutine: string
  sameTimeEveryDay: string
  limitScreenTime: string
  avoidScreensBeforeBed: string

  // Temperature
  temperatureMonitoring: string
  trackBodyTemperature: string
  currentTemperature: string
  todayAverage: string
  todayLow: string
  todayHigh: string
  withinNormalRange: string
  attentionNeeded: string
  hypothermia: string
  fever: string
  highFever: string
  temperatureZones: string
  normalDailyPattern: string
  healthyCircadianRhythm: string
  eveningPeak: string
  peaksLateAfternoon: string
  mildElevation: string
  slightElevationDetected: string
  feverDetection: string
  noFeverDetected: string
  temperatureWithinRange: string
  monitorSymptoms: string
  watchForSymptoms: string
  seekMedicalAttention: string
  ifFeverPersists: string

  // Activity
  activityMonitoring: string
  trackDailySteps: string
  todaySteps: string
  caloriesBurned: string
  fromStepsToday: string
  distance: string
  totalDistanceWalked: string
  activeTime: string
  todayActivity: string
  activityProgress: string
  weeklyActivityOverview: string
  activityBreakdown: string
  weeklyGoals: string
  goalAchieved: string
  activityInsights: string
  consistentActivity: string
  metDailyGoal: string
  peakActivityTime: string
  mostActiveHours: string
  weekendBoost: string
  moreActiveWeekends: string
  activityRecommendations: string
  increaseIntensity: string
  addBriskWalking: string
  setHigherGoals: string
  increaseStepGoal: string
  varietyIsKey: string
  mixActivities: string
  recentAchievements: string
  dayStreak: string
  consecutiveDays: string
  distanceMaster: string
  walkedDistance: string
  calorieBurner: string
  burnedCalories: string

  // Notifications
  unreadNotifications: string
  markAllAsRead: string
  markAsRead: string
  deleteNotification: string
  noNotifications: string
  allCaughtUp: string
  notificationSettings: string
  heartRateAlerts: string
  heartRateOutsideRange: string
  sleepQualityAlerts: string
  sleepPatternNotifications: string
  activityAchievements: string
  celebrateFitnessGoals: string

  // Recommendations
  healthRecommendations: string
  aiPoweredSuggestions: string
  totalRecommendations: string
  highPriority: string
  mediumPriority: string
  lowPriority: string
  priority: string
  category: string
  markAsDone: string
  dismiss: string
  noRecommendations: string
  adjustFilters: string
  actionPlan: string
  inProgress: string
  notStarted: string
  completed: string

  // Settings
  manageAccountPreferences: string
  profileSettings: string
  fullName: string
  enterFullName: string
  emailAddress: string
  enterEmail: string
  currentPassword: string
  enterCurrentPassword: string
  newPassword: string
  enterNewPassword: string
  confirmNewPassword: string
  confirmPassword: string
  saveChanges: string
  appearance: string
  theme: string
  light: string
  dark: string
  system: string
  colorScheme: string
  blue: string
  green: string
  purple: string
  orange: string
  privacySecurity: string
  twoFactorAuthentication: string
  extraLayerSecurity: string
  dataExport: string
  downloadHealthData: string
  exportData: string
  deleteAccount: string
  permanentlyDeleteAccount: string

  // Auth
  login: string
  register: string
  signOut: string
  email: string
  password: string
  forgotPassword: string
  rememberMe: string
  dontHaveAccount: string
  alreadyHaveAccount: string
  createAccount: string
  signIn: string
  welcomeBack: string
  signInToAccount: string
  createNewAccount: string
  joinHealthTracker: string
  name: string
  enterName: string
  passwordsMustMatch: string
  invalidEmail: string
  passwordTooShort: string
  accountCreated: string
  loginSuccessful: string
  logoutSuccessful: string

  // Landing Page
  welcomeToHealthTracker: string
  comprehensiveHealthDashboard: string
  realTimeMonitoring: string
  smartRecommendations: string
  mobileResponsive: string
  getStarted: string
  learnMore: string
  features: string
  sleepTracking: string
  activityTracking: string
  darkMode: string
  mobileFriendly: string
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    dashboard: 'Dashboard',
    heartRate: 'Heart Rate',
    sleep: 'Sleep',
    temperature: 'Temperature',
    activity: 'Activity',
    notifications: 'Notifications',
    recommendations: 'Recommendations',
    settings: 'Settings',

    // Common
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    view: 'View',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    all: 'All',
    none: 'None',
    yes: 'Yes',
    no: 'No',
    ok: 'OK',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Info',

    // Dashboard
    healthTracker: 'Health Tracker',
    overview: 'Overview',
    currentTime: 'Current Time',
    live: 'Live',
    static: 'Static',
    goal: 'Goal',
    progress: 'Progress',
    complete: 'Complete',
    achieved: 'Achieved',
    almostThere: 'Almost There',
    goodProgress: 'Good Progress',
    keepMoving: 'Keep Moving',

    // Heart Rate
    heartRateMonitoring: 'Heart Rate Monitoring',
    trackYourHeartRate: 'Track your heart rate and detect patterns',
    currentHeartRate: 'Current Heart Rate',
    bpm: 'BPM',
    restingRate: 'Resting Rate',
    averageToday: 'Today\'s Average',
    high: 'High',
    normal: 'Normal',
    low: 'Low',
    elevated: 'Elevated',
    heartRateZones: 'Heart Rate Zones',
    zone1: 'Zone 1 (Resting)',
    zone2: 'Zone 2 (Fat Burn)',
    zone3: 'Zone 3 (Cardio)',
    zone4: 'Zone 4 (Peak)',
    zone5: 'Zone 5 (Maximum)',
    dailyInsights: 'Daily Insights',

    // Sleep
    sleepMonitoring: 'Sleep Monitoring',
    trackYourSleepPatterns: 'Track your sleep patterns and quality',
    lastNight: 'Last Night',
    sleepQuality: 'Sleep Quality',
    bedtime: 'Bedtime',
    wakeTime: 'Wake Time',
    deepSleep: 'Deep Sleep',
    lightSleep: 'Light Sleep',
    remSleep: 'REM Sleep',
    excellent: 'Excellent',
    good: 'Good',
    fair: 'Fair',
    poor: 'Poor',
    consistentBedtime: 'Consistent bedtime',
    naturalWakeCycle: 'Natural wake cycle',
    sleepQualityOverTime: 'Sleep Quality Over Time',
    weeklySleepOverview: 'Weekly Sleep Overview',
    sleepInsights: 'Sleep Insights',
    consistentSleepSchedule: 'Consistent Sleep Schedule',
    maintainedConsistentBedtime: 'You\'ve maintained a consistent bedtime for the past 5 days',
    goodDeepSleep: 'Good Deep Sleep',
    deepSleepAboveRecommended: 'Your deep sleep duration is above the recommended 2 hours',
    roomForImprovement: 'Room for Improvement',
    reduceScreenTime: 'Consider reducing screen time 1 hour before bedtime',
    sleepRecommendations: 'Sleep Recommendations',
    optimizeEnvironment: 'Optimize Your Environment',
    keepBedroomCool: 'Keep your bedroom cool (65-67°F) and dark for better sleep quality',
    establishRoutine: 'Establish a Routine',
    sameTimeEveryDay: 'Try to go to bed and wake up at the same time every day',
    limitScreenTime: 'Limit Screen Time',
    avoidScreensBeforeBed: 'Avoid screens 1 hour before bedtime to improve sleep onset',

    // Temperature
    temperatureMonitoring: 'Temperature Monitoring',
    trackBodyTemperature: 'Track your body temperature and detect fever patterns',
    currentTemperature: 'Current Temperature',
    todayAverage: 'Today\'s Average',
    todayLow: 'Today\'s Low',
    todayHigh: 'Today\'s High',
    withinNormalRange: 'Within normal range',
    attentionNeeded: 'Attention needed',
    hypothermia: 'Hypothermia',
    fever: 'Fever',
    highFever: 'High Fever',
    temperatureZones: 'Temperature Zones',
    normalDailyPattern: 'Normal Daily Pattern',
    healthyCircadianRhythm: 'Your temperature follows a healthy circadian rhythm',
    eveningPeak: 'Evening Peak',
    peaksLateAfternoon: 'Temperature typically peaks in the late afternoon',
    mildElevation: 'Mild Elevation',
    slightElevationDetected: 'Slight elevation detected - monitor for symptoms',
    feverDetection: 'Fever Detection & Alerts',
    noFeverDetected: 'No Fever Detected',
    temperatureWithinRange: 'Your temperature is within normal range',
    monitorSymptoms: 'Monitor Symptoms',
    watchForSymptoms: 'Watch for fatigue, body aches, or other symptoms',
    seekMedicalAttention: 'Seek Medical Attention',
    ifFeverPersists: 'If fever persists or exceeds 39°C',

    // Activity
    activityMonitoring: 'Activity Monitoring',
    trackDailySteps: 'Track your daily steps, calories, and physical activity',
    todaySteps: 'Today\'s Steps',
    caloriesBurned: 'Calories Burned',
    fromStepsToday: 'From steps today',
    distance: 'Distance',
    totalDistanceWalked: 'Total distance walked',
    activeTime: 'Active Time',
    todayActivity: 'Today\'s activity',
    activityProgress: 'Today\'s Activity Progress',
    weeklyActivityOverview: 'Weekly Activity Overview',
    activityBreakdown: 'Activity Breakdown',
    weeklyGoals: 'Weekly Goals',
    goalAchieved: 'Goal achieved!',
    activityInsights: 'Activity Insights',
    consistentActivity: 'Consistent Activity',
    metDailyGoal: 'You\'ve met your daily goal 5 out of 7 days this week',
    peakActivityTime: 'Peak Activity Time',
    mostActiveHours: 'Your most active hours are between 2-6 PM',
    weekendBoost: 'Weekend Boost',
    moreActiveWeekends: 'You\'re 25% more active on weekends',
    activityRecommendations: 'Activity Recommendations',
    increaseIntensity: 'Increase Intensity',
    addBriskWalking: 'Try adding 10 minutes of brisk walking to boost your daily activity',
    setHigherGoals: 'Set Higher Goals',
    increaseStepGoal: 'Consider increasing your daily step goal to 12,000 steps',
    varietyIsKey: 'Variety is Key',
    mixActivities: 'Mix walking with cycling or swimming for better fitness',
    recentAchievements: 'Recent Achievements',
    dayStreak: '7-Day Streak',
    consecutiveDays: 'Met daily goal for 7 consecutive days',
    distanceMaster: 'Distance Master',
    walkedDistance: 'Walked 50+ km this month',
    calorieBurner: 'Calorie Burner',
    burnedCalories: 'Burned 5,000+ calories this week',

    // Notifications
    unreadNotifications: 'unread notification',
    markAllAsRead: 'Mark all as read',
    markAsRead: 'Mark read',
    deleteNotification: 'Delete',
    noNotifications: 'No notifications',
    allCaughtUp: 'You\'re all caught up! Check back later for new updates.',
    notificationSettings: 'Notification Settings',
    heartRateAlerts: 'Heart Rate Alerts',
    heartRateOutsideRange: 'Get notified when your heart rate is outside normal range',
    sleepQualityAlerts: 'Sleep Quality Alerts',
    sleepPatternNotifications: 'Receive notifications about your sleep patterns',
    activityAchievements: 'Activity Achievements',
    celebrateFitnessGoals: 'Celebrate when you reach your fitness goals',

    // Recommendations
    healthRecommendations: 'Health Recommendations',
    aiPoweredSuggestions: 'AI-powered suggestions to improve your health and wellness',
    totalRecommendations: 'Total Recommendations',
    highPriority: 'High Priority',
    mediumPriority: 'Medium Priority',
    lowPriority: 'Low Priority',
    priority: 'Priority',
    category: 'Category',
    markAsDone: 'Mark as done',
    dismiss: 'Dismiss',
    noRecommendations: 'No recommendations found',
    adjustFilters: 'Try adjusting your filters or check back later for new suggestions.',
    actionPlan: 'Your Action Plan',
    inProgress: 'In progress',
    notStarted: 'Not started',
    completed: 'Completed',

    // Settings
    manageAccountPreferences: 'Manage your account preferences and notification settings',
    profileSettings: 'Profile Settings',
    fullName: 'Full Name',
    enterFullName: 'Enter your full name',
    emailAddress: 'Email Address',
    enterEmail: 'Enter your email',
    currentPassword: 'Current Password',
    enterCurrentPassword: 'Enter current password',
    newPassword: 'New Password',
    enterNewPassword: 'Enter new password',
    confirmNewPassword: 'Confirm New Password',
    confirmPassword: 'Confirm new password',
    saveChanges: 'Save Changes',
    appearance: 'Appearance',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    colorScheme: 'Color Scheme',
    blue: 'Blue',
    green: 'Green',
    purple: 'Purple',
    orange: 'Orange',
    privacySecurity: 'Privacy & Security',
    twoFactorAuthentication: 'Two-Factor Authentication',
    extraLayerSecurity: 'Add an extra layer of security to your account',
    dataExport: 'Data Export',
    downloadHealthData: 'Download your health data in various formats',
    exportData: 'Export Data',
    deleteAccount: 'Delete Account',
    permanentlyDeleteAccount: 'Permanently delete your account and all data',

    // Auth
    login: 'Login',
    register: 'Register',
    signOut: 'Sign out',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    rememberMe: 'Remember me',
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: 'Already have an account?',
    createAccount: 'Create Account',
    signIn: 'Sign In',
    welcomeBack: 'Welcome back',
    signInToAccount: 'Sign in to your account',
    createNewAccount: 'Create a new account',
    joinHealthTracker: 'Join Health Tracker',
    name: 'Name',
    enterName: 'Enter your name',
    passwordsMustMatch: 'Passwords must match',
    invalidEmail: 'Invalid email address',
    passwordTooShort: 'Password must be at least 6 characters',
    accountCreated: 'Account created successfully',
    loginSuccessful: 'Login successful',
    logoutSuccessful: 'Logout successful',

    // Landing Page
    welcomeToHealthTracker: 'Welcome to Health Tracker',
    comprehensiveHealthDashboard: 'A comprehensive health tracking dashboard with real-time monitoring',
    realTimeMonitoring: 'Real-time monitoring',
    smartRecommendations: 'Smart recommendations',
    mobileResponsive: 'Mobile responsive',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    features: 'Features',
    sleepTracking: 'Sleep Tracking',
    activityTracking: 'Activity Tracking',
    darkMode: 'Dark Mode',
    mobileFriendly: 'Mobile Friendly',
  },
  ar: {
    // Navigation
    dashboard: 'لوحة التحكم',
    heartRate: 'معدل ضربات القلب',
    sleep: 'النوم',
    temperature: 'درجة الحرارة',
    activity: 'النشاط',
    notifications: 'الإشعارات',
    recommendations: 'التوصيات',
    settings: 'الإعدادات',

    // Common
    loading: 'جاري التحميل...',
    save: 'حفظ',
    cancel: 'إلغاء',
    delete: 'حذف',
    edit: 'تعديل',
    view: 'عرض',
    close: 'إغلاق',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    search: 'بحث',
    filter: 'تصفية',
    sort: 'ترتيب',
    all: 'الكل',
    none: 'لا شيء',
    yes: 'نعم',
    no: 'لا',
    ok: 'موافق',
    error: 'خطأ',
    success: 'نجح',
    warning: 'تحذير',
    info: 'معلومات',

    // Dashboard
    healthTracker: 'متتبع الصحة',
    overview: 'نظرة عامة',
    currentTime: 'الوقت الحالي',
    live: 'مباشر',
    static: 'ثابت',
    goal: 'الهدف',
    progress: 'التقدم',
    complete: 'مكتمل',
    achieved: 'محقق',
    almostThere: 'تقريباً هناك',
    goodProgress: 'تقدم جيد',
    keepMoving: 'استمر في التحرك',

    // Heart Rate
    heartRateMonitoring: 'مراقبة معدل ضربات القلب',
    trackYourHeartRate: 'تتبع معدل ضربات قلبك واكتشف الأنماط',
    currentHeartRate: 'معدل ضربات القلب الحالي',
    bpm: 'ضربة/دقيقة',
    restingRate: 'معدل الراحة',
    averageToday: 'المتوسط اليوم',
    high: 'عالي',
    normal: 'طبيعي',
    low: 'منخفض',
    elevated: 'مرتفع',
    heartRateZones: 'مناطق معدل ضربات القلب',
    zone1: 'المنطقة 1 (الراحة)',
    zone2: 'المنطقة 2 (حرق الدهون)',
    zone3: 'المنطقة 3 (القلب والأوعية)',
    zone4: 'المنطقة 4 (الذروة)',
    zone5: 'المنطقة 5 (الحد الأقصى)',
    dailyInsights: 'رؤى يومية',

    // Sleep
    sleepMonitoring: 'مراقبة النوم',
    trackYourSleepPatterns: 'تتبع أنماط نومك وجودته',
    lastNight: 'الليلة الماضية',
    sleepQuality: 'جودة النوم',
    bedtime: 'وقت النوم',
    wakeTime: 'وقت الاستيقاظ',
    deepSleep: 'النوم العميق',
    lightSleep: 'النوم الخفيف',
    remSleep: 'نوم حركة العين السريعة',
    excellent: 'ممتاز',
    good: 'جيد',
    fair: 'مقبول',
    poor: 'ضعيف',
    consistentBedtime: 'وقت نوم ثابت',
    naturalWakeCycle: 'دورة استيقاظ طبيعية',
    sleepQualityOverTime: 'جودة النوم مع الوقت',
    weeklySleepOverview: 'نظرة عامة على النوم الأسبوعي',
    sleepInsights: 'رؤى النوم',
    consistentSleepSchedule: 'جدول نوم ثابت',
    maintainedConsistentBedtime: 'لقد حافظت على وقت نوم ثابت لمدة 5 أيام',
    goodDeepSleep: 'نوم عميق جيد',
    deepSleepAboveRecommended: 'مدة نومك العميق أعلى من الساعتين الموصى بهما',
    roomForImprovement: 'مجال للتحسين',
    reduceScreenTime: 'فكر في تقليل وقت الشاشة قبل النوم بساعة',
    sleepRecommendations: 'توصيات النوم',
    optimizeEnvironment: 'تحسين البيئة',
    keepBedroomCool: 'حافظ على غرفة النوم باردة (18-19°م) ومظلمة لجودة نوم أفضل',
    establishRoutine: 'إنشاء روتين',
    sameTimeEveryDay: 'حاول الذهاب للنوم والاستيقاظ في نفس الوقت كل يوم',
    limitScreenTime: 'تقييد وقت الشاشة',
    avoidScreensBeforeBed: 'تجنب الشاشات قبل النوم بساعة لتحسين بداية النوم',

    // Temperature
    temperatureMonitoring: 'مراقبة درجة الحرارة',
    trackBodyTemperature: 'تتبع درجة حرارة جسمك واكتشف أنماط الحمى',
    currentTemperature: 'درجة الحرارة الحالية',
    todayAverage: 'متوسط اليوم',
    todayLow: 'أدنى اليوم',
    todayHigh: 'أعلى اليوم',
    withinNormalRange: 'ضمن النطاق الطبيعي',
    attentionNeeded: 'تحتاج انتباه',
    hypothermia: 'انخفاض حرارة الجسم',
    fever: 'حمى',
    highFever: 'حمى عالية',
    temperatureZones: 'مناطق درجة الحرارة',
    normalDailyPattern: 'نمط يومي طبيعي',
    healthyCircadianRhythm: 'درجة حرارتك تتبع إيقاع يومي صحي',
    eveningPeak: 'ذروة المساء',
    peaksLateAfternoon: 'درجة الحرارة تبلغ ذروتها في وقت متأخر من الظهر',
    mildElevation: 'ارتفاع خفيف',
    slightElevationDetected: 'تم اكتشاف ارتفاع خفيف - راقب الأعراض',
    feverDetection: 'اكتشاف الحمى والتنبيهات',
    noFeverDetected: 'لم يتم اكتشاف حمى',
    temperatureWithinRange: 'درجة حرارتك ضمن النطاق الطبيعي',
    monitorSymptoms: 'راقب الأعراض',
    watchForSymptoms: 'راقب التعب وآلام الجسم أو أعراض أخرى',
    seekMedicalAttention: 'اطلب العناية الطبية',
    ifFeverPersists: 'إذا استمرت الحمى أو تجاوزت 39°م',

    // Activity
    activityMonitoring: 'مراقبة النشاط',
    trackDailySteps: 'تتبع خطواتك اليومية والسعرات الحرارية والنشاط البدني',
    todaySteps: 'خطوات اليوم',
    caloriesBurned: 'السعرات المحروقة',
    fromStepsToday: 'من خطوات اليوم',
    distance: 'المسافة',
    totalDistanceWalked: 'إجمالي المسافة المقطوعة',
    activeTime: 'وقت النشاط',
    todayActivity: 'نشاط اليوم',
    activityProgress: 'تقدم النشاط اليوم',
    weeklyActivityOverview: 'نظرة عامة على النشاط الأسبوعي',
    activityBreakdown: 'تفصيل النشاط',
    weeklyGoals: 'الأهداف الأسبوعية',
    goalAchieved: 'تم تحقيق الهدف!',
    activityInsights: 'رؤى النشاط',
    consistentActivity: 'نشاط ثابت',
    metDailyGoal: 'لقد حققت هدفك اليومي 5 من أصل 7 أيام هذا الأسبوع',
    peakActivityTime: 'وقت النشاط الذروة',
    mostActiveHours: 'أكثر ساعات نشاطك بين 2-6 مساءً',
    weekendBoost: 'تعزيز عطلة نهاية الأسبوع',
    moreActiveWeekends: 'أنت أكثر نشاطاً بنسبة 25% في عطلات نهاية الأسبوع',
    activityRecommendations: 'توصيات النشاط',
    increaseIntensity: 'زيادة الكثافة',
    addBriskWalking: 'جرب إضافة 10 دقائق من المشي السريع لتعزيز نشاطك اليومي',
    setHigherGoals: 'ضع أهدافاً أعلى',
    increaseStepGoal: 'فكر في زيادة هدف خطواتك اليومي إلى 12,000 خطوة',
    varietyIsKey: 'التنوع هو المفتاح',
    mixActivities: 'امزج المشي مع ركوب الدراجات أو السباحة للياقة أفضل',
    recentAchievements: 'الإنجازات الأخيرة',
    dayStreak: 'سلسلة 7 أيام',
    consecutiveDays: 'حققت الهدف اليومي لمدة 7 أيام متتالية',
    distanceMaster: 'سيد المسافة',
    walkedDistance: 'مشيت أكثر من 50 كم هذا الشهر',
    calorieBurner: 'محترق السعرات',
    burnedCalories: 'أحرقت أكثر من 5,000 سعرة حرارية هذا الأسبوع',

    // Notifications
    unreadNotifications: 'إشعارات غير مقروءة',
    markAllAsRead: 'تحديد الكل كمقروء',
    markAsRead: 'تحديد كمقروء',
    deleteNotification: 'حذف',
    noNotifications: 'لا توجد إشعارات',
    allCaughtUp: 'أنت محدث بالكامل! تحقق لاحقاً للحصول على تحديثات جديدة.',
    notificationSettings: 'إعدادات الإشعارات',
    heartRateAlerts: 'تنبيهات معدل ضربات القلب',
    heartRateOutsideRange: 'احصل على إشعارات عندما يكون معدل ضربات قلبك خارج النطاق الطبيعي',
    sleepQualityAlerts: 'تنبيهات جودة النوم',
    sleepPatternNotifications: 'استقبل إشعارات حول أنماط نومك',
    activityAchievements: 'إنجازات النشاط',
    celebrateFitnessGoals: 'احتفل عندما تحقق أهداف لياقتك',

    // Recommendations
    healthRecommendations: 'توصيات الصحة',
    aiPoweredSuggestions: 'اقتراحات مدعومة بالذكاء الاصطناعي لتحسين صحتك ورفاهيتك',
    totalRecommendations: 'إجمالي التوصيات',
    highPriority: 'أولوية عالية',
    mediumPriority: 'أولوية متوسطة',
    lowPriority: 'أولوية منخفضة',
    priority: 'الأولوية',
    category: 'الفئة',
    markAsDone: 'تحديد كمكتمل',
    dismiss: 'رفض',
    noRecommendations: 'لم يتم العثور على توصيات',
    adjustFilters: 'جرب تعديل المرشحات أو تحقق لاحقاً للحصول على اقتراحات جديدة.',
    actionPlan: 'خطة عملك',
    inProgress: 'قيد التنفيذ',
    notStarted: 'لم يبدأ',
    completed: 'مكتمل',

    // Settings
    manageAccountPreferences: 'إدارة تفضيلات حسابك وإعدادات الإشعارات',
    profileSettings: 'إعدادات الملف الشخصي',
    fullName: 'الاسم الكامل',
    enterFullName: 'أدخل اسمك الكامل',
    emailAddress: 'عنوان البريد الإلكتروني',
    enterEmail: 'أدخل بريدك الإلكتروني',
    currentPassword: 'كلمة المرور الحالية',
    enterCurrentPassword: 'أدخل كلمة المرور الحالية',
    newPassword: 'كلمة المرور الجديدة',
    enterNewPassword: 'أدخل كلمة المرور الجديدة',
    confirmNewPassword: 'تأكيد كلمة المرور الجديدة',
    confirmPassword: 'تأكيد كلمة المرور الجديدة',
    saveChanges: 'حفظ التغييرات',
    appearance: 'المظهر',
    theme: 'المظهر',
    light: 'فاتح',
    dark: 'داكن',
    system: 'النظام',
    colorScheme: 'مخطط الألوان',
    blue: 'أزرق',
    green: 'أخضر',
    purple: 'بنفسجي',
    orange: 'برتقالي',
    privacySecurity: 'الخصوصية والأمان',
    twoFactorAuthentication: 'المصادقة الثنائية',
    extraLayerSecurity: 'أضف طبقة أمان إضافية لحسابك',
    dataExport: 'تصدير البيانات',
    downloadHealthData: 'حمل بيانات صحتك بصيغ مختلفة',
    exportData: 'تصدير البيانات',
    deleteAccount: 'حذف الحساب',
    permanentlyDeleteAccount: 'احذف حسابك وبياناتك نهائياً',

    // Auth
    login: 'تسجيل الدخول',
    register: 'التسجيل',
    signOut: 'تسجيل الخروج',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    forgotPassword: 'نسيت كلمة المرور؟',
    rememberMe: 'تذكرني',
    dontHaveAccount: 'ليس لديك حساب؟',
    alreadyHaveAccount: 'لديك حساب بالفعل؟',
    createAccount: 'إنشاء حساب',
    signIn: 'تسجيل الدخول',
    welcomeBack: 'مرحباً بعودتك',
    signInToAccount: 'سجل الدخول إلى حسابك',
    createNewAccount: 'إنشاء حساب جديد',
    joinHealthTracker: 'انضم إلى متتبع الصحة',
    name: 'الاسم',
    enterName: 'أدخل اسمك',
    passwordsMustMatch: 'يجب أن تتطابق كلمات المرور',
    invalidEmail: 'عنوان بريد إلكتروني غير صحيح',
    passwordTooShort: 'يجب أن تكون كلمة المرور 6 أحرف على الأقل',
    accountCreated: 'تم إنشاء الحساب بنجاح',
    loginSuccessful: 'تم تسجيل الدخول بنجاح',
    logoutSuccessful: 'تم تسجيل الخروج بنجاح',

    // Landing Page
    welcomeToHealthTracker: 'مرحباً بك في متتبع الصحة',
    comprehensiveHealthDashboard: 'لوحة تحكم شاملة لتتبع الصحة مع مراقبة فورية',
    realTimeMonitoring: 'مراقبة فورية',
    smartRecommendations: 'توصيات ذكية',
    mobileResponsive: 'متجاوب مع الهاتف المحمول',
    getStarted: 'ابدأ',
    learnMore: 'اعرف المزيد',
    features: 'الميزات',
    sleepTracking: 'تتبع النوم',
    activityTracking: 'تتبع النشاط',
    darkMode: 'الوضع الداكن',
    mobileFriendly: 'صديق للهاتف المحمول',
  },
}

export function getTranslation(lang: Language, key: keyof Translations): string {
  return translations[lang][key] || key
}

export function getDirection(lang: Language): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr'
} 