import { atom } from "jotai";


interface TriggerAction {
  id: string,
  name: string,
  description: string,
  imageUrl: string
}

export const currentSectionAtom = atom("workflows");
export const userAtom = atom("");

export const availableTriggersAtom = atom<TriggerAction[]>();
export const availableActionsAtom = atom<TriggerAction[]>();


// this is your main trigger and action state for a workflow 
// to be addted once the user clicks on save 
export const tirggerAtom = atom();
export const actionsAtom = atom();


// might just move to main defautl page 
export const selectedTriggerAtom = atom("");
export const selectedActionAtom = atom("");
