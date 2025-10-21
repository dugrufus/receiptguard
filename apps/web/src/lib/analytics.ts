export function metric(name: string, value?: number, meta?: any) {
  // Stub: Replace with real analytics instrumentation (PostHog/EventBridge) in production.
  // Metrics to capture per Rev C:
  // - time_to_first_action
  // - return_path_depth
  // - nba_tap_rate
  // - primary_miss_tap_rate
  // - stepper_abandonment_after_step_2
  // - finish_later_resume_24h
  // - tap_to_paint_nba_p50
  // - savings_satisfaction
  console.log('[METRIC]', name, value, meta || '')
}