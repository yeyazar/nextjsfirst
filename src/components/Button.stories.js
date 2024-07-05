import React from 'react';
import Button from '../stories/Button';

export default {
    title: 'Example/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
}

export const SEcondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
    variant: 'secondary',
}