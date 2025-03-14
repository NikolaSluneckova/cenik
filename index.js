const selectPlan = (planNumber) => {
    const plans = document.querySelectorAll('.plan');
    plans.forEach(plan => {
        if (plan.id !== `plan${planNumber}`) {
            plan.remove();
        }
    });

    const planElement = document.getElementById(`plan${planNumber}`);
    if (planElement) {
        planElement.classList.add('plan--selected');
    }
};

selectPlan(1);