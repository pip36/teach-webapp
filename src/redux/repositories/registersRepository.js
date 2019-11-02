import { map } from "rxjs/operators";

export default () => ({
  GET: () => source$ =>
    source$.pipe(
      map(() => JSON.parse(window.localStorage.getItem("registers") || "[]"))
    ),
  ADD: () => source$ =>
    source$.pipe(
      map(({ payload }) => {
        const id = Math.random() * 10000;
        const registers = JSON.parse(
          window.localStorage.getItem("registers") || "[]"
        );
        registers.push({ id, ...payload });
        window.localStorage.setItem("registers", JSON.stringify(registers));
        return id;
      })
    )
});
