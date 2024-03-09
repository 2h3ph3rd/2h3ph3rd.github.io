# 1️⃣ Linear Regression

> Given a set of inputs it produces a continuos output

Linear Regression is a machine learning algorithm that is used to predict the value of a dependent variable based on one or more independent variables.

The independent variables are also called features and the dependent variable is also called the target.

The goal of linear regression is to find the best fitting line that describes the relationship between the independent variables and the dependent variable.

## Model

The model of linear regression is a linear equation that describes the relationship between the independent variables and the dependent variable.

The general form of the model is:

$$
y = w x + b
$$

Where $y$ is the dependent variable, $x$ is the independent variable, $w$ is the weight and $b$ is the bias.

## Cost function

$$
J(w,\ b) = \frac{1}{2m} \sum_{i=1}^{m} (\hat{y}^{(i)} - y^{(i)})^2
$$