import { createMachine, assign } from 'xstate';

export interface PostItem {
  createdAt: string;
  id: string;
  title: string;
  url: string;
  published: boolean;
  isExternal: boolean;
}

export const postMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAcD2sAuBZAhgYwAsBLAOzADoAxMDQ0qABXQ1iprpKgBUjNUAnInDa1inAMQRUZcqQBuqANYU0mXBwrVR9JplZaO3XhgFD97MVATzUeHBiLSA2gAYAuohToiD6Z5AAHogAzKHkACwAbMEA7ABMABxxwYkAnMEAjAA0IACeiHHhCeSpAKzRMaXBpS5RMS4JAL6NOarY+GKaFjrM5tqcPHyCwgaW4mD8-ALkyAA29gBmAgC2M8zqnSKGuixbloMmw32G1iQKdr4krh5IIKo+jiT+QQihwREViclpmTn5r7EItUXKk4jFIqkYhlUk0Wnd1h1SF1+oxent6FgACLoiRSGQ2ZRrNSImSjHp6HFQLGU07neyPa7+e6XZ4hFwucgZFyhOJxDLBCHhYLhP6IGqpCIuSJC6LShLS-nNVoIjSUnbHSzUskSCZTfgzeYYJb8VZtDZItVo7VU7HW2m2enOdxM7ws24vYLsznclJ8gWpIUivJiyHkBIJUqFIWQjKRUoxJXw4mq63qyTSCiYewqFWbVO9F2wB5+d2IKExEoZQrpCOg0pC0WvGIVoWlDLhVIZNsZeKxZpwkioCBwQvtFPdTjqykHUzCTEZwvFp6lhBVDLkXkR9m1cKlBKpSKNuKROIRGpctfhLmQ0qJs0k5HbK0ToxDMzkACikwEi7doBea4bokNTsuEu77oewYAuurZtgG0qlJGCZwve44olO1ozkclK-o8rIIFycRHlU5Anj6vI9vyDSwsqyZ5i+GEvlhZi4SW-5lgkjY9qUJT1J2ELspk7Z3rmFr5hS1pai+rHLuxBEuERUFtuE5AuPUQoNNCsbBCJdFiQxz4otS85kDJ+EdqedblIKkQZFWYGNpGlnsu2tmgmCfYoaJpIGRJL7Ul+epmSuFklHEiGRDZdlRo5nZhhGcoBny4TJLpY70ehhmGFiwVyTEnFQTKERxCCzaduE9QJEKaXmj5mV6LlgRikG-yESUEbgbuLhdvGNUPuQJlgI1LwJJkG4VakkLlil2RQbEMHVPGe5ROyVR9Row1so2nr9o0QA */
  createMachine({
  context: { posts: [] },
  tsTypes: {} as import('./post-machine.typegen').Typegen0,
  schema: {
    context: {} as { posts: PostItem[] },
    events: {} as
      | {
          type: 'done.invoke.postMachine.FetchingPosts.FetchingTistories.Fetching:invocation[0]';
          data: PostItem[];
        }
      | {
          type: 'done.invoke.postMachine.FetchingPosts.FetchingMD.Fetching:invocation[0]';
          data: PostItem[];
        }
      | {
          type: 'UPDATE';
          data: PostItem[];
        }
      | {
          type: 'ERROR';
        },
  },
  initial: 'FetchingPosts',
  id: 'postMachine',
  states: {
    FetchingPosts: {
      type: 'parallel',
      states: {
        FetchingTistories: {
          initial: 'Fetching',
          states: {
            Done: {
              type: 'final',
            },
            Error: {
              type: 'final',
            },
            Fetching: {
              invoke: {
                src: 'fetchTistories',
                onDone: [
                  {
                    actions: 'updatePostsContext',
                    target: 'Done',
                  },
                ],
                onError: [
                  {
                    target: 'Error',
                  },
                ],
              },
            },
          },
        },
        FetchingMD: {
          initial: 'Fetching',
          states: {
            Fetching: {
              invoke: {
                src: 'fetchMD',
                onDone: [
                  {
                    actions: 'updatePostsContext',
                    target: 'Done',
                  },
                ],
                onError: [
                  {
                    target: 'Error',
                  },
                ],
              },
            },
            Done: {
              type: 'final',
            },
            Error: {
              type: 'final',
            },
          },
        },
      },
      onDone: {
        target: 'Done',
      },
    },
    Done: {},
  },
}, {
    actions: {
      updatePostsContext: assign((ctx, event) => {
        return {
          posts: [...ctx.posts, ...event.data],
        };
      }),
    },
  });
