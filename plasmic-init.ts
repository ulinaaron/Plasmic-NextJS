import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from './components/HelloWorld';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "3zdNURid7LizDnQVA76Ba5",  // ID of a project you are using
      token: "pMnoBPaYcBILh14F9LQUCF9tLUkB22H2dsir2bsTc54xCOFJX1LrRPAQODt2ts5cn2Sz3fZpPzPjyyztUQ2w"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});