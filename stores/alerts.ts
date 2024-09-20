export type Type = 'success' | 'warning' | 'error';

export interface Item {
  id: number,
  type: Type,
  message: string
}

interface State {
  items: Item[],
  timeout: number
}

export const useAlertsStore = defineStore('alertsStore', {
  state: (): State => ({
    items: [],
    timeout: 5000
  }),
  actions: {
    create(item: Pick<Item, 'message' | 'type'>): void {
      const newItem = Object.assign(item, { id: Math.floor(Math.random() * 10000) });
      this.items.push(newItem);
    },
    remove(id: number): void {
      const ind = this.items.findIndex((item) => item.id === id);
      if(ind !== -1) {
        this.items.splice(ind, 1);
      }
    },
    reset() {
      this.items = [];
    }
  },
});
