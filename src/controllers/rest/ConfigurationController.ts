import { Controller } from "@tsed/di";
import { Authorize } from "@tsed/passport";
import { Country, Language } from "@tsed/prisma";
import { Get } from "@tsed/schema";

@Authorize()
@Controller("/configuration")
export class ConfigurationController {
  @Get("/")
  get() {
    return {
      languages: Object.keys(Language),
      countries: Object.keys(Country)
    };
  }
}
