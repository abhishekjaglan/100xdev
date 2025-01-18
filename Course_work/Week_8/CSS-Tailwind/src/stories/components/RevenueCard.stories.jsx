import { RevenueCard } from '../../components/RevenueCard';

const meta = {
  component: RevenueCard,
};

export default meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  arg: {
    orderCount: "123",
    title: "Amount pending",
    amount: "1000"
  }
};