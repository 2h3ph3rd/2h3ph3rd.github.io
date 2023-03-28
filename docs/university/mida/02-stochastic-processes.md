# Stochastic Processes

### Definition

A stochastic process (SP) is an infinite sequence of random variables all defined on the same probabilistic space.

$v(t,s)$

t: index of the sequence

s: random experiment realization

### Equivalence

Two signal are equivalent if they are different realization of the same stochastic process.

### Wide sense characterization

A stochastic process is fully defined by its probability distribution, considering its mean and convariance function.

### Mean value

$$
m(t) = \mathbb{E}[v(t,s)] = \int_{\mathbb{R}} v(t,s) pdf(s) ds
$$

pdf(s): probability density function of s

<p align="center">
  <img src={require("./assets/mean.png").default}></img>
</p>

### Covariance function

$$
\gamma(t_1, t_2) = \mathbb{E}[ (v(t_1, s) - m(t_1)) (v(t_2, s) - m(t_2))]
$$

When $t_1=t_2=t$ the covariance function becomes the variance.

$$
\gamma(t, t) = \mathbb{E}[ (v(t, s) - m(t)) (v(t, s) - m(t))] = \mathbb{E}[ (v(t, s) - m(t))^2] = \gamma(t)
$$

<p align="center">
  <img src={require("./assets/covariance.png").default}></img>
</p>

## Stationary Stochastic Processes (SSP)

### Definition

A stationary stochastic process is a stochastic process with:

1. $m(t)=m, \forall t$
1. $\gamma(t_1, t_2) \quad \text{depends only on} \quad \tau = t_2-t_1$

From the second point:

$$
t_2-t_1 = t_4-t_3 \Rightarrow \gamma(t_1, t_2) = \gamma(t_3, t_4)
$$

### Properties

1. $\gamma(0) \geq 0$
1. $|\gamma(\tau)| \leq \gamma(0), \forall \tau$
1. $\gamma(\tau) = \gamma(-\tau), \forall \tau$

From the last point, the covariance function of a SSP is an even function.

## White Noise (WN)

### Definition

A SSP is called white noise with mean $\mu$ and variance $\lambda^2$ if the following conditions hold:

1. The mean is equal to $\mu$

   $\mathbb{E}[e(t)] = \mu$

1. The variance is equal $\lambda^2$

   $\mathbb{E}[(e(t)-\mu)^2] = Var[e(t)] = \gamma_e(0)=\lambda^2$

1. The covariance is equal to zero (no correlation between different time instants)

   $\gamma_e(\tau) = \mathbb{E}[ (e(t) - \mu) (e(t - \tau) - \mu)] = 0, \forall t, \forall \tau \neq 0$

This process is usually indicated as $e(t) \sim \text{WN}(\mu, \lambda^2)$

<p align="center">
  <img src={require("./assets/white_noise.png").default}></img>
</p>
$$
