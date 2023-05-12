import { createSSRApp } from "vue";

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `
      <main class="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-dark">
        <div class="container">
          <h1 class="text-white mb-3">Counter</h1>

          <p class="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, commodi
            illum deleniti aut, necessitatibus labore veniam nihil doloremque aliquam
            ea, ab nulla. Culpa placeat ea suscipit blanditiis sequi officia iure?
          </p>
          
          <div class="d-flex justify-content-start align-items-center">
            <button type="button" class="btn btn-danger" @click="decrement">-</button>
            <h4 class="text-white mx-3">{{ count }}</h4>
            <button type="button" class="btn btn-primary" @click="increment">+</button>
          </div>
        </div>
      </main>
    `,
    methods: {
      decrement() {
        this.count--;
      },
      increment() {
        this.count++;
      },
    },
  });
}
