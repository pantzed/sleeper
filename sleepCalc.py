import sys
import scipy
import numpy
import matplotlib
import pandas
import sklearn
import random

from pandas.plotting import scatter_matrix
import matplotlib.pyplot as plt
from sklearn import model_selection
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC

path = "sleep_data_1200.csv"
names = ['duration', 'rem_minutes', 'rem_percent', 'class']
dataset = pandas.read_csv(path, names=names)

# Split-out validation dataset
array = dataset.values
X = array[:,0:3]
Y = array[:,3]
validation_size = 0.20
seed = 7
X_train, X_validation, Y_train, Y_validation = model_selection.train_test_split(X, Y, test_size=validation_size, random_state=seed)

model = DecisionTreeClassifier()
model.fit(X_train, Y_train)
predictions = model.predict(X_validation)

# duration = int(sys.argv[1])
# rem = random.randint(60, 240)
# percent_rem = rem/duration
# Xnew = [[duration, rem, percent_rem]]
# ynew = model.predict(Xnew)
# print(ynew[0])

testing = sys.argv[1]

try:
  import simplejson as json
except (ImportError,):
  import json

sleepData = json.loads(testing)

for x in sleepData:
  duration = int(x)
  rem = random.randint(60, 240)
  percent_rem = rem/duration
  Xnew = [[duration, rem, percent_rem]]
  ynew = model.predict(Xnew)
  print(ynew[0])

sys.stdout.flush()