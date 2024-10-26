import numpy as np
import matplotlib.pyplot as plt
x = [0, 1, 2, 3]
y = [0, 1, 4, 9]
# https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html
# https://python-graph-gallery.com/line-chart/
plt.plot(x, y)


# https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.ion.html
# plt.ion() 
# plt.ioff()

plt.show()


x = np.linspace(-5,5, 100)
plt.plot(x, x**2)



plt.plot(x, x**2, 'g--', label = 'quadratic')
plt.plot(x, x**3, label = 'cubic', linewidth=1, color ='blue' )
plt.legend(loc = 2)

plt.title(f'ნახაზის სათაური {x[0]}-დან {x[-1]}-მდე')
plt.xlabel('X axis', fontsize = 18)
plt.ylabel('Y axis', fontsize = 18)


plt.xlim(-6.6)
plt.ylim(-10,10)
plt.grid()

plt.plot(x, np.log(np.abs(x)), label = 'log natural', linewidth=1, color ='red' )