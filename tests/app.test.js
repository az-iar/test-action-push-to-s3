import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import PlayGame from "@/components/PlayGame.vue";

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

describe("The app without the bug", () => {
  // 1
  it("the playtime was updated doesn't as expected when restarting the game", async () => {
    const wrapper = mount(App);

    const startBtn = wrapper.find('[data-test="start-btn"]');

    startBtn.trigger("click");

    await sleep(1100);

    wrapper.vm.end();

    await wrapper.vm.$nextTick();

    const restartBtn = wrapper.find('[data-test="restart-btn"]');

    restartBtn.trigger("click");

    await sleep(1100);

    expect(wrapper.vm.playTime).toBe(14);
  });

  // 2
  it("the keydown event was triggered multiple times when restarting the game", async () => {
    const wrapper = mount(App, {
      attachTo: document.body,
    });

    const startBtn = wrapper.find('[data-test="start-btn"]');

    startBtn.trigger("click");

    await sleep(1100);

    const removeEventListenerSpy = vi.spyOn(document, "removeEventListener");

    wrapper.vm.end();

    await wrapper.vm.$nextTick();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "keydown",
      expect.any(Function),
    );
  });
});
