/**
 * @license MIT, imicros.de (c) 2025 Andreas Leinen
 */
"use strict";

/* istanbul ignore file */
class Constants {
    // Execution platform
    static get PLATFORM_FLOW() { return "flow"; }
    static get PLATFORM_CAMUNDA() { return "zeebe"; }
    // Task types
    static get TASK() { return "Task"; }
    static get SEND_TASK() { return "Send Task"; }
    static get RECEIVE_TASK() { return "Receive Task"; }
    static get USER_TASK() { return "User Task"; }
    static get MANUAL_TASK() { return "Manual Task"; }
    static get BUSINESS_RULE_TASK() { return "Business Rule Task"; }
    static get SERVICE_TASK() { return "Service Task"; }
    static get SCRIPT_TASK() { return "Script Task"; }
    static get CALL_ACTIVITY() { return "Call Activity"; }
    // Gateway types
    static get EXCLUSIVE_GATEWAY() { return "Exclusive Gateway"; }
    static get EVENT_BASED_GATEWAY() { return "Event-based Gateway"; }
    static get PARALLEL_GATEWAY() { return "Parallel Gateway"; }
    static get INCLUSIVE_GATEWAY() { return "Inclusive Gateway"; }
    static get COMPLEX_GATEWAY() { return "Complex Gateway"; }
    static get EXCLUSIVE_EVENT_BASED_GATEWAY() { return "Exclusive Event-based Gateway"; }
    static get PARALLEL_EVENT_BASED_GATEWAY() { return "Parallel Event-based Gateway"; }
    // Event positions
    static get START_EVENT() { return "Start Event"; }
    static get INTERMEDIATE_EVENT() { return "Intermediate Event"; }
    static get BOUNDARY_EVENT() { return "Boundary Event"; }
    static get END_EVENT() { return "End Event"; }
    // Event types
    static get DEFAULT_EVENT() { return "Default Event"; }
    static get MESSAGE_EVENT() { return "Message Event"; }
    static get TIMER_EVENT() { return "Timer Event"; }
    static get ESCALATION_EVENT() { return "Escalation Event"; }
    static get CONDITIONAL_EVENT() { return "Conditional Event"; }
    static get ERROR_EVENT() { return "Error Event"; }
    static get CANCEL_EVENT() { return "Cancel Event"; }
    static get COMPENSATION_EVENT() { return "Compensation Event"; }
    static get SIGNAL_EVENT() { return "Signal Event"; }
    static get MULTIPLE_EVENT() { return "Multiple Event"; }
    static get PARALLEL_MULTIPLE_EVENT() { return "Parallel Multiple Event"; }
    static get TERMINATE_EVENT() { return "Terminate Event"; }
    // Event directions
    static get CATCHING_EVENT() { return "Catching Event"; }
    static get THROWING_EVENT() { return "Throwing Event"; }
    // Event interactions
    static get BOUNDARY_INTERRUPTING_EVENT() { return "Boundary Interupting Event"; }
    static get BOUNDARY_NON_INTERRUPTING_EVENT() { return "Boundary Non-Interrupting Event"; }
    // Timer types
    static get TIMER_DURATION() { return "Duration"; }
    static get TIMER_CYCLE() { return "Cycle"; }
    static get TIMER_DATE() { return "Date"; }
    // Sequence flow types
    static get SEQUENCE_STANDARD() { return "DIRECT"; }
    static get SEQUENCE_CONDITIONAL() { return "CONDITIONAL"; }
    // Token status
    static get SEQUENCE_ACTIVATED() { return "SEQUENCE.ACTIVATED"; }
    static get SEQUENCE_REJECTED() { return "SEQUENCE.REJECTED"; }
    static get SEQUENCE_ERROR() { return "SEQUENCE.ERROR"; }
    static get SEQUENCE_COMPLETED() { return "SEQUENCE.COMPLETED"; }
    static get SEQUENCE_ERROR() { return "SEQUENCE.ERROR"; }
    static get EVENT_ACTIVATED() { return "EVENT.ACTIVATED"; }
    static get EVENT_READY() { return "EVENT.READY"; }
    static get EVENT_WAITING() { return "EVENT.WAITING"; }
    static get EVENT_ERROR() { return "EVENT.ERROR"; }
    static get EVENT_OCCURED() { return "EVENT.OCCURED"; }
    static get PROCESS_ACTIVATED() { return "PROCESS.ACTIVATED"; }
    static get ACTIVITY_ACTIVATED() { return "ACTIVITY.ACTIVATED"; }
    static get ACTIVITY_READY() { return "ACTIVITY.READY"; }
    static get ACTIVITY_COMPLETED() { return "ACTIVITY.COMPLETED"; }
    static get ACTIVITY_ERROR() { return "ACTIVITY.ERROR"; }
    static get GATEWAY_ACTIVATED() { return "GATEWAY.ACTIVATED"; }
    static get GATEWAY_COMPLETED() { return "GATEWAY.COMPLETED"; }
    static get GATEWAY_RED_BUTTON() { return "GATEWAY.RED_BUTTON"; }
    static get PROCESS_ERROR() { return "PROCESS.ERROR"; }
    // Instance status
    static get INSTANCE_RUNNING() { return "INSTANCE.RUNNING"; }
    static get INSTANCE_FAILED() { return "INSTANCE.FAILED"; }
    static get INSTANCE_COMPLETED() { return "INSTANCE.COMPLETED"; }
    // Context
    static get CONTEXT_ERROR() { return "_ERROR"; }     
    // Subscription types
    static get SUBSCRIPTION_TYPE_SIGNAL() { return "SIGNAL"; }
    static get SUBSCRIPTION_TYPE_MESSAGE() { return "MESSAGE"; }
    static get SUBSCRIPTION_TYPE_EVENT() { return "EVENT"; }
    // Queue types
    static get QUEUE_TOPIC_EVENTS() { return "events"; }
    static get QUEUE_TOPIC_INSTANCE() { return "instance"; }
    static get QUEUE_TOPIC_MESSAGES() { return "messages"; }
    static get QUEUE_TOPIC_TIMER() { return "timer"; }
    // Queue events
    static get QUEUE_EVENT_RAISED() { return "event.raised"; }
    static get QUEUE_JOB_CREATED() { return "job.created"; }
    static get QUEUE_JOB_COMPLETED() { return "job.completed"; }
    static get QUEUE_JOB_FAILED() { return "job.failed"; }
    static get QUEUE_MESSAGE_NOTIFIED() { return "message.notified"; }
    static get QUEUE_MESSAGE_RECEIVED() { return "message.received"; }
    static get QUEUE_TIMER_REACHED() { return "timer.reached"; }
    static get QUEUE_INSTANCE_REQUESTED() { return "instance.requested"; }
    static get QUEUE_INSTANCE_PROCESSED() { return "instance.processed"; }
    static get QUEUE_INSTANCE_COMPLETED() { return "instance.completed"; }
}

module.exports = { Constants };