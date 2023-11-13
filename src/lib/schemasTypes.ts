import { minLength, literal, object, string, Output, union } from 'valibot'

export const TaskLabelSchema = union([
  object({
    value: literal('bug'),
    label: literal('Bug'),
  }),
  object({
    value: literal('feature'),
    label: literal('Feature'),
  }),
  object({
    value: literal('documentation'),
    label: literal('Documentation'),
  }),
])
export type TTaskLabel = Output<typeof TaskLabelSchema>
export const TaskLabelValueSchema = union([
  literal('bug'),
  literal('feature'),
  literal('documentation'),
])
export type TTaskLabelValue = Output<typeof TaskLabelValueSchema>

export const TaskPrioritySchema = union([
  object({
    icon: literal('ArrowDownIcon'),
    value: literal('low'),
    label: literal('Low'),
  }),
  object({
    icon: literal('ArrowRightIcon'),
    value: literal('medium'),
    label: literal('Medium'),
  }),
  object({
    icon: literal('ArrowUpIcon'),
    value: literal('high'),
    label: literal('High'),
  }),
])
export type TTaskPriority = Output<typeof TaskPrioritySchema>
export const TaskPriorityValueSchema = union([
  literal('low'),
  literal('medium'),
  literal('high'),
])
export type TTaskPriorityValue = Output<typeof TaskPriorityValueSchema>

export const TaskStatusSchema = union([
  object({
    icon: literal('StopwatchIcon'),
    value: literal('in progress'),
    label: literal('In Progress'),
  }),
  object({
    icon: literal('CrossCircledIcon'),
    value: literal('canceled'),
    label: literal('Canceled'),
  }),
  object({
    icon: literal('QuestionMarkCircledIcon'),
    value: literal('backlog'),
    label: literal('Backlog'),
  }),
  object({
    icon: literal('CheckCircledIcon'),
    value: literal('done'),
    label: literal('Done'),
  }),
  object({
    icon: literal('CircleIcon'),
    value: literal('todo'),
    label: literal('Todo'),
  }),
])
export type TTaskStatus = Output<typeof TaskStatusSchema>
export const TaskStatusValueSchema = union([
  literal('in progress'),
  literal('canceled'),
  literal('backlog'),
  literal('done'),
  literal('todo'),
])
export type TTaskStatusValueSchema = Output<typeof TaskStatusValueSchema>

export const TaskSchema = object({
  priority: TaskPriorityValueSchema,
  status: TaskStatusValueSchema,
  label: TaskLabelValueSchema,
  title: string(),
  id: string(),
})
export type TTask = Output<typeof TaskSchema>

export const FormSchema = object({
  title: string('Title must be a string.', [
    minLength(1, 'Please enter task title.'),
  ]),
  priority: TaskPriorityValueSchema,
  status: TaskStatusValueSchema,
})
