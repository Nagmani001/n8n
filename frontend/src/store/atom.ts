import { atom } from "jotai";


interface TriggerAction {
  id: string,
  name: string,
  description: string,
  imageUrl: string
}
export const availableTriggersAtom = atom<TriggerAction[]>();
export const availableActionsAtom = atom<TriggerAction[]>();

export const currentSectionAtom = atom("workflows");
export const userAtom = atom("");



// this is your main trigger and action state for a workflow 
// to be addted once the user clicks on save 
// not actually , on save i should make http request and persist it in db 
export const tirggerAtom = atom();
export const actionsAtom = atom();


// might just move to main defautl page 
export const selectedTriggerAtom = atom("");
export const selectedActionAtom = atom("");
