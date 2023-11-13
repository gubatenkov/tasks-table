import {
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectValue,
  SelectItem,
  Select,
} from '@/components/ui/select.tsx'
import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  Form,
} from '@/components/ui/form.tsx'
import {
  type SubmitHandler,
  type FieldValues,
  Controller,
  useForm,
} from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useTasksStore } from '@/stores/tasksStore.ts'
import { priorities, statuses } from '@/lib/data.ts'
import { Button } from '@/components/ui/button.tsx'
import { FormSchema } from '@/lib/schemasTypes.ts'
import { Input } from '@/components/ui/input.tsx'

export function EditTaskForm() {
  const { clearEditTaskId, updateEditTask, getEditTask } = useTasksStore()
  const editTask = getEditTask()
  const form = useForm({
    defaultValues: {
      priority: editTask?.priority ?? '',
      status: editTask?.status ?? '',
      title: editTask?.title ?? '',
    },
    resolver: valibotResolver(FormSchema),
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    updateEditTask(data)
    clearEditTaskId()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          render={({ field }) => (
            <FormItem className="mb-2 text-left">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter task title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          control={form.control}
          name="title"
        />
        <div className="!mt-0 flex flex-col items-center justify-between xs:flex-row xs:gap-4">
          <Controller
            render={({ field: { onChange, ref, ...field } }) => (
              <FormItem className="mb-2 w-full text-left xs:mb-0">
                <FormLabel>Status</FormLabel>
                <Select onValueChange={onChange} {...field}>
                  <SelectTrigger className="w-full" ref={ref}>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {statuses.map(({ label, value }) => (
                        <SelectItem value={value} key={value}>
                          <span>{label}</span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
            name="status"
          />
          <Controller
            render={({ field: { onChange, ref, ...field } }) => (
              <FormItem className="w-full text-left">
                <FormLabel>Priority</FormLabel>
                <Select onValueChange={onChange} {...field}>
                  <SelectTrigger className="w-full" ref={ref}>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {priorities.map(({ label, value }) => (
                        <SelectItem value={value} key={value}>
                          <span>{label}</span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
            name="priority"
          />
        </div>
        <Button className="!mt-8 w-full" type="submit">
          Apply changes
        </Button>
      </form>
    </Form>
  )
}
