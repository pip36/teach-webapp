import { ajax } from "rxjs/ajax";
import registersRepository from "redux/repositories/registersRepository";

export default {
  dependencies: {
    ajax,
    registers: registersRepository()
  }
};
